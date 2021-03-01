import React from 'react';
import { View, Text, Button } from 'react-native';

class ListScreen extends React.Component {
   render() {
      return (
         <View>
            <Text>List component</Text>
            <Button 
               title="Go To Text"
               onPress={() => (
                  this.props.navigation.navigate('Text')
               )}
            />
            <Button 
               title="Go To Video"
               onPress={() => (
                  this.props.navigation.navigate('Video')
               )}
            />
            <Button 
               title="Go To Game"
               onPress={() => (
                  this.props.navigation.navigate('Game')
               )}
            />
         </View>
      );
   }
}

export default ListScreen;