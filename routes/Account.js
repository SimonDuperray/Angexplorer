import React from "react";
import { 
   StyleSheet, 
   View, 
   Text, 
   TextInput,
   TouchableOpacity,
   ScrollView,
   Dimensions,
   Image
} from "react-native";
import Success from "../components/Success";
import Reward from "../components/Reward";
import * as Animatable from "react-native-animatable";

class Account extends React.Component {
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
                     Liste
                  </Text>
               </TouchableOpacity>
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <ScrollView>
                  <View style={styles.myAccount}>
                     <View style={styles.partContainer}>
                        <Text style={styles.partTitle}>Mon compte</Text>
                     </View>
                     <View style={[styles.action], {marginLeft: 20}}>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                        style={styles.input}
                           placeholder="simon.duperray@reseau.eseo.fr"
                        />
                        <Text style={[styles.label, {marginTop: 10}]}>Mot de passe:</Text>
                        <TextInput
                        style={styles.input}
                           secureTextEntry="true"
                           placeholder="*********"
                        />
                     </View>
                  </View>
                  <View style={styles.mySuccess}>
                     <View style={styles.partContainer}>
                        <Text style={styles.partTitle}>Mes succès - 3/48</Text>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableOpacity
                           onPress={()=> {
                              this.props.navigation.navigate("FirstSuccess")
                           }}
                        >
                           <Success success="ABB"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("SecondSuccess")
                           }}
                        >
                           <Success success="LTP"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("ThirdSuccess")
                           }}
                        >
                           <Success success="PDLF"/>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={styles.myRewards}>
                     <View style={styles.partContainer}>
                        <Text style={styles.partTitle}>Mes récompenses - 2</Text>
                     </View>
                     <View style={styles.itemContainer}>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("FirstReward")
                           }}
                        >
                           <Reward reward="Irigo - 10% réduction"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("SecondReward")
                           }}
                        >
                           <Reward reward="Bistrot des Ducs - Menu offert"/>
                        </TouchableOpacity>
                     </View>
                  </View>
                  <View style={styles.myRewards}>
                     <View style={styles.partContainer}>
                        <Text style={styles.partTitle}>Mes évènements - 2</Text>
                     </View>
                     <View>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("FirstEvent")
                           }}
                        >
                           {/* <Reward reward="Mail"/> */}
                           <Text>Jardin du Mail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("SecondEvent")
                           }}
                        >
                           {/* <Reward reward="Librairie Contact"/> */}
                           <Text>Librairie Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                           onPress={() => {
                              this.props.navigation.navigate("ThirdEvent")
                           }}
                        >
                           {/* <Reward reward="Crêperie des Angles"/> */}
                           <Text>Crêperie des Angles</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </ScrollView>
            </Animatable.View>
         </View>
      );
   }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.27;

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
      flex: 1.5,
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
})

// text input: border and padding and fontsize

export default Account;