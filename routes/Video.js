import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from "react-native-animatable";

class VideoScreen extends React.Component {
   render() {
      const onBuffer = () => {
         console.log("on buffer handle");
      }
      const videoError = () => {
         console.log("video error");
      }
      const {height} = Dimensions.get("screen");
      const height_logo = height*0.28;
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image
                     animation="bounceIn"
                     duraton="1500"
                  source={require("../assets/logoreduitnoir.svg")}
                  resizeMode="stretch"
                  style={{
                     width: height_logo,
                     height: height_logo
                  }}
               />
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}>
               <Text style={styles.warning}>
                  The Video component is still not working...
               </Text>
            </Animatable.View>
         </View>
      );
   }
}

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
});

export default VideoScreen;