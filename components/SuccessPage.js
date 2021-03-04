import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class SuccessPage extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text>{ this.props.successName }</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FDB934"
   }
});