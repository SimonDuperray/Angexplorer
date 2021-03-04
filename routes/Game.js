import React from "react";
import { 
   StyleSheet, 
   View, 
   Text, 
   TextInput,
   TouchableOpacity,
   ScrollView,
   Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default class Game extends React.Component {
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
               <TouchableOpacity
                  onPress={() => {
                     this.props.navigation.navigate("List")
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
                     Back to List
                  </Text>
               </TouchableOpacity>
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <Text style={styles.title}>Jeu du pendu</Text>
               <View style={styles.toFindContainer}>
                  <Text style={[styles.health], { fontSize: 17 }}>O O O O O O O O O</Text>
                  <Text style={styles.toFind}>_ _ _ _ _ _ _ _ _ _</Text>
               </View>
               <View style={[styles.keyboard, { flexDirection: 'row' }]}>
                  <TextInput
                     style={{
                        width: 50,
                        height: 50,
                        borderWidth: 1,
                        borderColor: '#000',
                        padding: 5,
                        borderRadius: 100,
                        textAlign: 'center'
                     }}
                  />
                  <TouchableOpacity

                  >
                     <Text>Ok</Text>
                  </TouchableOpacity>
               </View>
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
   partTitle: {
      fontSize: 20,
      fontWeight: 'bold'
   },
   itemContainer: {
      flexDirection: 'row'
   },
   partContainer: {
      paddingBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: "#05375a",
      margin: 20
   },
   backToList: {
      flexDirection: 'row',
      backgroundColor: "red",
      width: 150,
      padding: 10,
      textAlign: "center"
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
   label: {
      fontSize: 15,
      marginBottom: 5
   },
   input: {
      fontSize: 15,
      borderWidth: 1,
      borderColor: "#000",
      marginRight: 20,
      padding: 7,
      borderRadius: 30,
      color: 13
   },
   logo: {
      width: height_logo,
      height: height_logo-100
   },
   title: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10
   },
   toFindContainer: {

   },
   toFind: {
      fontSize: 25,
      textAlign: 'center'
   },
   health: {
      textAlign: 'center'
   }
})