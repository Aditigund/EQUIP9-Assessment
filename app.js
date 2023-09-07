const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Require the upload router
const uploadRouter = require("./uploadRouter"); // Update the path to your upload router file

// Use the upload router for handling image uploads
app.use("/api/upload", uploadRouter); // Adjust the route path as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
