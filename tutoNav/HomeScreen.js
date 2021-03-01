import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
   render() {
      return (
         <View>
            <Text>You have (undefined) friends.</Text>
            <Button 
               title="Add some friends"
               onPress={() => (
                  this.props.navigation.navigate('Friends')
               )}
            />
         </View>
      );
   }
}

export default HomeScreen;