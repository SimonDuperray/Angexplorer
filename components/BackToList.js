import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class BackToList extends React.Component {
   render() {
      return (
         <View>
            <TouchableOpacity
               onPress={() => {
                  this.props.navigation.navigate('List')
               }}
            >
               <Text>Back to list</Text>
            </TouchableOpacity>
         </View>
      );
   }
}

const styles = StyleSheet.create({

});