// Import necessary components and libraries

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenFour from './ScreenFour';
import ScreenOne from './ScreenOne';
import ScreenThree from './ScreenThree';
import ScreenTwo from './ScreenTwo';

// Create a stack navigator
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenThree"
          component={ScreenThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenFour"
          component={ScreenFour}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
