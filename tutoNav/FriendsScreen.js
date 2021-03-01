import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class FriendsScreen extends React.Component {
   render() {
      return (
         <View>
            <Text>Add friend here!</Text>
            <Button 
               title="Back to Home"
               onPress={() => (
                  this.props.navigation.navigate('Home')
               )}
            />
         </View>
      );
   }
}

export default FriendsScreen;