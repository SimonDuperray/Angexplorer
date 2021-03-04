import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default class FirstSuccess extends React.Component {
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
                     borderRadius: 10
                  }}
               >
                  <Text
                     style={{
                        fontWeight: 'bold',
                        color: "#fff"
                     }}
                  >
                     Back to my Account
                  </Text>
               </TouchableOpacity>
            </View>
            <View style={styles.footer}>
               <Text style={styles.successName}>Aventurier de Belle-Beille</Text>
               <Image
                  source={require("../../assets/bellebeille.PNG")}
                  style={{ aspectRatio: 2/3, height: 150, borderRadius: 5, marginBottom: 30 }}
               />
               <Text style={styles.successDescription}>
                  Vous êtes passés à tous les arrêts de la ligne 1 en moins d'une semaine ! Vous remportez donc 5 points, bravo !
               </Text>
            </View>
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