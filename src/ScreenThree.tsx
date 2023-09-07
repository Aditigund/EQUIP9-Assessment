import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import ScreenFour from './ScreenFour';
import {useRoute} from '@react-navigation/native';

function ScreenThree({navigation}) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitudeError, setLatitudeError] = useState('');
  const [longitudeError, setLongitudeError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleImagePicker = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (response.uri) {
        setSelectedImage(response.uri); // Set the selected image URI
      }
    });
  };

  const navigateToScreenFour = () => {
    // Parse latitude and longitude as numbers (floats) if needed
    const parsedLatitude = parseFloat(latitude);
    const parsedLongitude = parseFloat(longitude);

    navigation.navigate('ScreenFour', {
      latitude: parsedLatitude,
      longitude: parsedLongitude,
      selectedImage: selectedImage,
    });
  };

  const handleValidation = () => {
    const latRegex = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/; // Validate latitude format
    const lonRegex = /^-?((1[0-7][0-9])|([1-9]?[0-9]))\.{1}\d{1,6}$/; // Validate longitude format

    if (!latRegex.test(latitude)) {
      setLatitudeError('Invalid Latitude. Please enter a valid latitude.');
      return;
    } else {
      setLatitudeError('');
    }

    if (!lonRegex.test(longitude)) {
      setLongitudeError('Invalid Longitude. Please enter a valid longitude.');
      return;
    } else {
      setLongitudeError('');
    }

    // Store data (you can replace this with your preferred method)
    storeDataToNotepad();

    // Set the submission state to true
    setSubmitted(true);
  };

  const storeDataToNotepad = () => {
    // Implement your logic to store data in a notepad here
    // For example, you can use AsyncStorage or another storage mechanism.
    // This example just logs the data.
    console.log('Data stored in notepad:');
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  };
  const route = useRoute();
  const selectedImage = route.params?.selectedImage;

  const {width} = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior as needed
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust the vertical offset as needed
    >
      <ScrollView>
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
            }}
            source={{uri: selectedImage}}
          />
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Calculate Distance Page:
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 'bold',
            // color: 'black',
          }}>
          Enter Latitude:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Latitude"
          value={latitude}
          onChangeText={text => setLatitude(text)}
          keyboardType="ascii-capable"
        />
        {latitudeError ? (
          <Text style={{color: 'red'}}>{latitudeError}</Text>
        ) : null}

        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 'bold',
            // color: 'black',
          }}>
          Enter Longitude:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Longitude"
          value={longitude}
          onChangeText={text => setLongitude(text)}
          keyboardType="ascii-capable"
        />
        {longitudeError ? (
          <Text style={{color: 'red'}}>{longitudeError}</Text>
        ) : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleValidation}
            disabled={submitted}
            style={[
              styles.button,
              Platform.OS === 'android'
                ? {elevation: 5}
                : Platform.OS === 'ios'
                ? {
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    shadowOffset: {width: 0, height: 5},
                  }
                : {},
            ]}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          {submitted && (
            <TouchableOpacity
              onPress={navigateToScreenFour}
              style={[
                styles.button,
                Platform.OS === 'android'
                  ? {elevation: 5}
                  : Platform.OS === 'ios'
                  ? {
                      shadowColor: 'black',
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      shadowOffset: {width: 0, height: 5},
                    }
                  : {},
              ]}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#F79C00',
    borderRadius: 5,
    borderColor: '#141619',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#141619',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ScreenThree;
