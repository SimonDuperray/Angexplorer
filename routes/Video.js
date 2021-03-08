import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from "react-native-animatable";

class VideoScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               {/* <Animatable.Image
                     animation="bounceIn"
                     duraton="1500"
                  source={require("../assets/logocompletnoir.svg")}
                  resizeMode="stretch"
                  style={{
                     width: height_logo,
                     height: height_logo
                  }}
               /> */}
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}>
               <Text style={styles.warning}>
                  Problème de versions entre Expo et React Video...
               </Text>
            </Animatable.View>
         </View>
      );
   }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.37;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FDB934"
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
   warning: {
      fontWeight: 'bold',
      fontSize: 20,
      color: "#05375a",
   },
   backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
   },
   brandHeader: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
   },
   textHeader: {
      color: '#fff',
      fontSize: 20,
      fontStyle: 'italic'
   },
   accountRedirectionText: {
      color: '#fff',
      fontSize: 15,
      textDecorationStyle: 'solid',
      textDecorationColor: '#fff',
      textDecorationLine: 'underline',
      fontWeight: 'bold',
   }
});

export default VideoScreen;