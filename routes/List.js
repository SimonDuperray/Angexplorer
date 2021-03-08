import React from 'react';
import { 
   View, 
   Text, 
   StyleSheet, 
   TouchableOpacity,
   Dimensions
} from 'react-native';
import * as Animatable from "react-native-animatable";

class ListScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image
                     animation="bounceIn"
                     duraton="1500"
                  source={require("../assets/logocompletnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               />
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate('Text')
                  }}
               >
                  <Text style={styles.textColorList}>Texte</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate('Video')
                  }}
               >
                  <Text style={styles.textColorList}>Vidéo</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate('Game')
                  }}
               >
                  <Text style={styles.textColorList}>Jeu</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate("Maps")
                  }}
               >
                  <Text style={styles.textColorList}>Maps</Text>
               </TouchableOpacity>
            </Animatable.View>
         </View>
      );
   }
}

const { height } = Dimensions.get('screen');
const height_logo = height *0.37;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FDB934',
   },
   button: {
      alignItems: "center",
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
      borderColor: "#FDB934",
      borderWidth: 1,
   },
   textColorList: {
      color: '#FDB934',
      fontWeight: 'bold',
   },
   header: {
      flex: 1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
   },
   footer: {
      flex: 1,
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
   logo: {
      width: height_logo,
      height: height_logo
   },
});

export default ListScreen;