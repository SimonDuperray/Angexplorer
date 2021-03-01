import React from 'react';
import { View, Text, Button } from 'react-native';

class ConnexionScreen extends React.Component {
   render() {
      return (
         <View>
            <Text>Connexion component</Text>
            <Button 
               title="Connect"
               onPress={() => (
                  this.props.navigation.navigate('List')
               )}
            />
         </View>
      );
   }
}

export default ConnexionScreen;