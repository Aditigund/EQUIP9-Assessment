//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import ScreenTwo from './ScreenTwo';

// create a component
const ScreenOne = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/download.jpg')} style={styles.image} />
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
        Upload Images
      </Text>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
        And Calulate Distance
      </Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenTwo')}>
          <Text style={styles.nextBtn}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#5A5A5A',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 26,
    right: 24,
  },
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
    resizeMode: 'contain', // Adjust this based on your image aspect ratio
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
    borderColor: '#F79C00',
    marginLeft: 48,
  },
});

//make this component available to the app
export default ScreenOne;
