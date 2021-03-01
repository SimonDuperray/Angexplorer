import React from 'react';
import { View, Text, Button } from 'react-native';

class GameScreen extends React.Component {
   render() {
      return (
         <View>
            <Text>Game component</Text>
            {/* <Button 
               title="Back to Home"
               onPress={() => (
                  this.props.navigation.navigate('Home')
               )}
            /> */}
         </View>
      );
   }
}

export default GameScreen;