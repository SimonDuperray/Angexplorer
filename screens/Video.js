import React from 'react';
import { StyleSheet, Text, View, Dimensions, ViewPropTypes } from 'react-native';
import Video from 'react-native-video';
import ralliement from './assets/PWS0RFYSV3YZU4XO.mp4';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.brandHeader}>Angexplorer</Text>
//         <Text style={styles.textHeader}>Place du Ralliement</Text>
//         <Text style={styles.accountRedirectionText}>My Account</Text>
//       </View>
//       <View style={styles.footer}>
//         <Video 
//           source={ralliement}
//           style={styles.videoPlayer}
//           resizeMode='cover'
//         />
//       </View>
//     </View>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.brandHeader}>Angexplorer</Text>
          <Text style={styles.textHeader}>Place du Ralliement</Text>
          <Text style={styles.accountRedirectionText}>My Account</Text>
        </View>
        <View style={styles.footer}>
          <Video 
            source={ralliement}
            style={styles.videoPlayer}
            resizeMode='cover'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FDB934',
   },
   header: {
      flex: 0.7,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
   },
   footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20
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
   },
   videoPlayer: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height
   }
});
