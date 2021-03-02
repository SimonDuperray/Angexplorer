import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class VideoScreen extends React.Component {
   render() {
      const onBuffer = () => {
         console.log("on buffer handle");
      }
      const videoError = () => {
         console.log("video error");
      }
      return (
         <View style={styles.container}>
            <Text style={styles.warning}>The Video component is still not working...</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      textAlign: 'center'
   },
   warning: {
      fontWeight: 'bold',
      fontSize: 20
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