import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native'; // Import the navigation hook

const ScreenTwo = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [latitude, setLatitude] = useState(null); // Add latitude state
  const [longitude, setLongitude] = useState(null); // Add longitude state

  const pickImage = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      console.log(response.assets[0].uri);
      setSelectedImage(response.assets[0].uri);
      // You can capture latitude and longitude from user input or other sources
      // For example, using TextInput components:

      // Replace these with your actual text input fields or methods to capture user input
      const userEnteredLatitude = parseFloat(latitude); // Convert to a float or number
      const userEnteredLongitude = parseFloat(longitude); // Convert to a float or number

      if (!isNaN(userEnteredLatitude) && !isNaN(userEnteredLongitude)) {
        // Ensure that the input values are valid numbers
        setLatitude(userEnteredLatitude);
        setLongitude(userEnteredLongitude);
      }
    });
  };

  const {width} = Dimensions.get('window');

  const navigateToScreenThree = () => {
    // Navigate to ScreenThree and pass the selected image URI as a parameter
    navigation.navigate('ScreenThree', {selectedImage});
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: width - 40,
            height: undefined,
            aspectRatio: 1.5,
            marginTop: 15,
          }}
          source={{uri: selectedImage}}
        />
      </View>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Upload Images</Text>
      </TouchableOpacity>
      <View style={styles.next}>
        <TouchableOpacity onPress={navigateToScreenThree}>
          <Text style={styles.nextBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F79C00',
    padding: 10,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    // flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#141619',
    fontSize: 18,
  },
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 26,
    right: 24,
  },
  nextBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#141619',
    color: '#F79C00',
    fontSize: 18,
    fontWeight: '600',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'red',
    marginLeft: 48,
  },
});

export default ScreenTwo;
