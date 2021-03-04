import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Reward extends React.Component {
   render() {
      return (
      <View style={styles.container}>
         <Text
            style={{
               textAlign: 'center'
            }}
         >
            { this.props.reward }
         </Text>
      </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#E87657",
      width: 140,
      height: 75,
      borderRadius: 5,
      margin: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,

   },
});