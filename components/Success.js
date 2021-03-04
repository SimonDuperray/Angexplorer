import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Success extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text>{ this.props.success }</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: '#FC7933',
      margin: 10,
      padding: 5,
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