import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

function ScreenFour({navigation}) {
  const route = useRoute();
  const selectedImage = route.params?.selectedImage;
  const savedLatitude = route.params?.latitude;
  const savedLongitude = route.params?.longitude;

  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const haversine = (lat1, lon1, lat2, lon2) => {
      const R = 6371;
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
    };

    if (savedLatitude !== undefined && savedLongitude !== undefined) {
      const calculatedDistance = haversine(
        savedLatitude,
        savedLongitude,

        route.params?.latitudeFromScreenThree || 0,
        route.params?.longitudeFromScreenThree || 0,
      );
      setDistance(calculatedDistance.toFixed(2));
    }
  }, [savedLatitude, savedLongitude]);

  const {width} = Dimensions.get('window');

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
          }}
          source={{uri: selectedImage}}
        />
      </View>

      <View>
        {distance !== null && (
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            Distance: {distance} km
          </Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScreenThree')}
          style={[
            styles.button,
            Platform.OS === 'android'
              ? {elevation: 5}
              : Platform.OS === 'ios'
              ? {
                  shadowColor: 'black',
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  shadowOffset: {width: 0, height: 2},
                }
              : {},
          ]}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('Distance:', distance);
          }}
          style={[
            styles.button,
            Platform.OS === 'android'
              ? {elevation: 5}
              : Platform.OS === 'ios'
              ? {
                  shadowColor: 'black',
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  shadowOffset: {width: 0, height: 2},
                }
              : {},
          ]}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignContent: 'center',
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

export default ScreenFour;
