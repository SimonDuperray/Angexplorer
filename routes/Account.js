import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Account extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text>Account screen</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FDB934",
   }
})

export default Account;