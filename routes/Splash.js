import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

class Splash extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image 
                     animation="bounceIn"
                     duraton="1500"
                  source={require("../assets/logoreduitnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               />
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <Text style={styles.title}>Un autre regard sur votre trajet</Text>
               <Text style={styles.text}>Se connecter</Text>
               <View style={styles.button}>
                  <TouchableOpacity 
                     onPress={() => {
                        this.props.navigation.navigate("SignUp")
                     }}
                     style={styles.signIn}
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
const height_logo = height * 0.28;

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
      fontWeight: 'bold'
   },
   text: {
      color: 'grey',
      marginTop: 5
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

export default Splash;