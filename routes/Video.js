import React from 'react';
import { View, Text, Button } from 'react-native';
import {Video} from 'react-native-video';
import video_ from "../assets/PWS0RFYSV3YZU4XO.mp4";

class VideoScreen extends React.Component {
   render() {
      const onBuffer = () => {
         console.log("on buffer handle");
      }
      const videoError = () => {
         console.log("video error");
      }
      return (
         <View>
            <Text>The Video component is still not working...</Text>
            {/* <Button 
               title="Back to Home"
               onPress={() => (
                  this.props.navigation.navigate('Home')
               )}
            /> */}
         </View>
      );
   }
}

const styles = StyleSheet.create({
   backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
   },
});

export default VideoScreen;