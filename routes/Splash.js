import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { pattern } from "../styles";

export default class Splash extends React.Component {
   render() {
      return (
         <View style={pattern.container}>
            <View style={pattern.header}>
               <Animatable.Image 
                     animation="bounceIn"
                     duraton="5000"
                  source={require("../assets/logocompletnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               />
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
                  duraton="5000"
               style={pattern.footer}
            >
               <Text style={styles.title}>Un autre regard</Text>
               <Text style={styles.title_underscored}>sur votre trajet</Text>
               <Text style={styles.text}>Hôtel de Ville</Text>
               <View style={styles.button}>
                  <TouchableOpacity 
                     onPress={() => {
                        this.props.navigation.navigate("Text")
                     }}
                     style={[styles.signIn, {
                        shadowColor: "#000",
                        shadowOffset: {
                           width: 0,
                           height: 4
                        },
                        shadowOpacity: 0.32,
                        shadowRadius: 5.46,
                        elevation: 9
                     }]}
                  >
                     <Text style={styles.textSign}>Allez-y</Text>
                     <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                     />
                  </TouchableOpacity>
               </View>
            </Animatable.View>
         </View>
      );
   }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.37;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FDB934",
   },
   header: {
      flex: 2,
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
      height: height_logo
   },
   title: {
      color: "#05375a",
      fontSize: 30,
      fontWeight: 'bold',
   },
   title_underscored: {
      color: "#05375a",
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#05375a",
   },
   text: {
      color: 'grey',
      marginTop: 15,
      fontSize: 17
   },
   button: {
      alignItems: "flex-end",
      marginTop: 30
   },
   signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      color: 'red',
      backgroundColor: "#FDB934"
   },
   textSign: {
      color: 'white',
      fontWeight: 'bold'
   }
});