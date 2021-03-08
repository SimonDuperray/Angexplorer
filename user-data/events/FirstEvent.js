import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default class FirstEvent extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image 
                     animation="bounceIn"
                     duraton="1500"
                  source={require("../../assets/logocompletnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               />
               <TouchableOpacity
                  onPress={() => {
                     this.props.navigation.navigate("Account")
                  }}
                  style={{
                     borderWidth: 1,
                     borderColor: "orange",
                     backgroundColor: 'orange',
                     paddingVertical: 5,
                     paddingHorizontal: 10,
                     borderRadius: 10,
                     shadowColor: "#000",
                     shadowOffset: {
                        width: 0,
                        height: 4,
                     },
                     shadowOpacity: 0.32,
                     shadowRadius: 5.46,
                     elevation: 9,
                  }}
               >
                  <Text
                     style={{
                        fontWeight: 'bold',
                        color: "#fff"
                     }}
                  >
                     Mon compte
                  </Text>
               </TouchableOpacity>
            </View>
            <Animatable.View 
                  animation='fadeInUpBig'
               style={styles.footer}
            >
               <Text style={styles.successName}>Jardin du Mail</Text>
               <Image
                  source={require("../../assets/mail.PNG")}
                  style={{ aspectRatio: 2/3, height: 150, borderRadius: 5, marginBottom: 30 }}
               />
               <Text style={styles.successDescription}>
                  Feux d'artifice le 23 avril 2021 à 21h !
               </Text>
            </Animatable.View>
         </View>
      );
   }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.37;
const width_logo = height_logo - 60;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FDB934",
   },
   header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   footer: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
   },
   logo: {
      width: height_logo,
      height: width_logo
   },
   successName: {
      textAlign: 'center',
      fontWeight: "bold",
      fontStyle: 'italic',
      fontSize: 18,
      marginBottom: 15
   },
   successDescription: {
      textAlign: 'center'
   }
});