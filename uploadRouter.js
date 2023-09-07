const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');

// Set up AWS credentials and S3 bucket name
AWS.config.update({
    accessKeyId: 'AKIA3KZVK3RM6V72UAHV',
    secretAccessKey: 'OrMJ2oKSdPdnI+tM53XJcse2fY4VvZoJ3xBJPy4j',
    region: 'ap-south-1',
  });

const s3 = new AWS.S3();
const bucketName = 'equip9-testing'; // Update with your S3 bucket name

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a route for handling image uploads
router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file provided" });
  }

  const uploadParams = {
    Bucket: bucketName,
    Key: file.originalname,
    Body: file.buffer,
  };

  s3.upload(uploadParams, (err, data) => {
    if (err) {
      console.error("Error uploading file:", err);
      res.status(500).json({ error: "Error uploading file" });
    } else {
      console.log("Image uploaded successfully. URL:", data.Location);
      res.json({ msg: `Successfully uploaded ${file.originalname}` });
    }
  });
});

module.exports = router;
