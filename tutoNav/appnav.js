import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./tutoNav/HomeScreen";
import FriendsScreen from "./tutoNav/FriendsScreen"

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;