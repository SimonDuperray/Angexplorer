import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConnexionScreen from "./routes/Connexion";
import GameScreen from "./routes/Game";
import ListScreen from "./routes/List";
import TextScreen from "./routes/Text";
import VideoScreen from "./routes/Video";
import SplashScreen from "./routes/Splash"

import img from "./assets/testComp.jpg";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
            name="List Component"
            component={ListScreen}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
          />
          <Stack.Screen
            name="Text"
            component={TextScreen}
          />
          <Stack.Screen
            name="Video"
            component={VideoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;