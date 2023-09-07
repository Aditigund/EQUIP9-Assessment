//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import AppNavigation from './src/AppNavigation';
import ScreenOne from './src/ScreenOne';
import ScreenTwo from './src/ScreenTwo';
import ScreenThree from './src/ScreenThree';
import ScreenFour from './src/ScreenFour';
import AppNavigation from './src/AppNavigation';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigation />

      {/* <ScreenOne /> */}
      {/* <ScreenTwo /> */}
      {/* <ScreenThree /> */}
      {/* <ScreenFour /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
