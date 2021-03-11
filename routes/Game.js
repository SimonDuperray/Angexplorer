import React from "react";
import { 
   StyleSheet, 
   View, 
   Text, 
   TouchableOpacity,
   Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import pendu from "../assets/img_pendu.PNG";

export default class Game extends React.Component {
   constructor(props){
      super(props);
      this.getKey = this.getKey.bind(this);
   }
   getKey(event){
      const selectedIndex = event.target.options.selectedIndex;
      console.log(event.target.options[selectedIndex].getAttribute('data-key'));
   }
   render() {
      const heartsList = [];
      for(let i=0; i<8; i++){
         heartsList.push(
            <FontAwesome
               name="heart"
               color="#05375a"
               size={20}
               style={styles.heart}
               id={i}
               key={i}
            />
         );
      }
      const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      const firstLine = [];
      const secondLine = [];
      const thirdLine = [];
      for(let f=0; f<11; f++){
         firstLine.push(
            <TouchableOpacity
               style={styles.letter}
               id={alphabet[f]}
               onPress={() => {
                  checkLetter(this.id);
               }}
               key={f}
            >
               {alphabet[f]}
            </TouchableOpacity>
         );
      }
      for(let s=11; s<20; s++){
         secondLine.push(
            <TouchableOpacity
               style={styles.letter}
               id={alphabet[s]}
               onPress={() => {
                  checkLetter(this.id);
               }}
               key={s}
            >
               {alphabet[s]}
            </TouchableOpacity>
         );
      }
      for(let t=21; t<=alphabet.length; t++){
         thirdLine.push(
            <TouchableOpacity
               style={styles.letter}
               id={alphabet[t]}
               onPress={() => {
                  console.log();
               }}
               key={t}
            >
               {alphabet[t]}
            </TouchableOpacity>
         );
      }
      const toFindLetters = ['R', 'A', 'L', 'I', 'E', 'M', 'N', 'T'];
      const checkLetter = (letter) => {
         alert(letter);
      }
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
                     Liste
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     this.props.navigation.navigate('Maps')
                  }}
                  style={{
                     borderWidth: 1,
                     borderColor: "orange",
                     backgroundColor: 'orange',
                     padding: 5,
                     borderRadius: 100,
                     width: 30,
                     height: 30,
                     textAlign: "center",
                     justifyContent: 'center',
                     marginTop: 15,
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
                  <MaterialIcons
                     name="location-pin"
                     color="#fff"
                     size={15}
                  />
               </TouchableOpacity>
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <Text style={styles.title}>Jeu du pendu</Text>
               <View style={styles.toFindContainer}>
                  <Text
                     style={styles.enigme}
                  >
                     Saviez-vous qu'une statue représentant le Roi René, Duc d'Anjou, a été exposée pendant deux semaines sur la place du Ralliement ?
                  </Text>
                  <View style={styles.health}>
                     { heartsList }
                  </View>
                  <Text style={styles.toFind}>_ _ _ _ _ _ _ _ _ _</Text>
               </View>
               <View style={styles.keyboard}>
                  <View style={styles.lineOfLetters}>
                     { firstLine }
                  </View>
                  <View style={styles.lineOfLetters}>
                     { secondLine }
                  </View>
                  <View style={styles.lineOfLetters}>
                     { thirdLine }
                  </View>
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
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10
   },
   heart: {
      marginHorizontal: 2,
   },
   letter: {
      margin: 8,
      fontSize: 20,
   },
   keyboard: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      marginTop: 15
   },
   lineOfLetters: {
      flexDirection: 'row',
      marginVertical: 8,
   },
   enigme: {
      textAlign: "center",
      marginBottom: 10,
   },
})