import React from 'react';
import { 
   View, 
   Text, 
   StyleSheet, 
   TouchableOpacity,
   Image,
   ScrollView,
   Dimensions,
} from 'react-native';
import * as Animatable from "react-native-animatable";
import mairie from "../assets/mairie.PNG";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class TextScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image 
                     animation="bounceIn"
                     duraton="5000"
                  source={require("../assets/logocompletnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               />
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <ScrollView>     
                  <Text style={styles.textHeader}>Hôtel de ville</Text>
                  <Image source={mairie} style={{ aspectRatio: 2/3, height: 150, borderRadius: 5, marginBottom: 30 }} />
                  <Text style={{ marginBottom: 20, fontSize: 17, textAlign: 'center' }}>
                     La Mairie d'Angers fut créée par Louis XI en 1474. Louis XI manoeuvrait contre le Roi René, son oncle, dont il désirait annexer le domaine angevin
                  </Text>
                  <View
                     style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                     }}
                  >
                     <TouchableOpacity
                        onPress={() => {
                           this.props.navigation.navigate("SignIn")
                        }}
                        style={styles.touchableOpacityIcon}
                     >
                        <FontAwesome
                           name="user-o"
                           color="#fff"
                           size={15}
                        />
                     </TouchableOpacity>
                     <TouchableOpacity
                        onPress={() => {
                           this.props.navigation.navigate('Maps')
                        }}
                        style={styles.touchableOpacityIcon}
                     >
                        <MaterialIcons
                           name="location-pin"
                           color="#fff"
                           size={15}
                        />
                     </TouchableOpacity>
                  </View>
                  {/* <Text>
                     En 1870, le cafetier Armand Gasnault passe commande auprès d’Alexandre Aïvas, architecte de renom, pour qu’il lui dessine les plans de ce qui deviendra, après deux ans de travaux, le Café Gasnault. Il devient rapidement une référence en termes d’animation, accueillant de nombreux artistes, et parfois même des orchestres entiers.
                     C’est dans cette dynamique que Gasnault organise, en 1896, soit seulement quelques mois après la première démonstration des frères Lumières, la première séance de cinéma donnée à Angers.
                     Ce lieu d’effervescence populaire a été converti en bureaux après les années 1950, mais il restera une référence dans l’histoire du divertissement à Angers.
                  </Text> */}
               </ScrollView>
            </Animatable.View>
         </View>
      );
   }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.37;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FDB934',
   },
   header: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     paddingHorizontal: 20,
   },
   footer: {
     flex: 2,
     backgroundColor: '#fff',
     borderTopLeftRadius: 30,
     borderTopRightRadius: 30,
     paddingHorizontal: 20,
     paddingVertical: 50
   },
   brandHeader: {
     color: '#fff',
     fontWeight: 'bold',
     fontSize: 30
   },
   textHeader: {
     color: '#000',
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
     marginBottom: 20
   },
   logo: {
      height: height_logo,
      width: height_logo,
   },
   accountRedirectionText: {
     color: '#fff',
     fontSize: 15,
     textDecorationStyle: 'solid',
     textDecorationColor: '#fff',
     textDecorationLine: 'underline',
     fontWeight: 'bold',
   },
   touchableOpacityStyleHeader: {
      borderWidth: 1,
      borderColor: "orange",
      backgroundColor: 'orange',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      width: 130,
      textAlign: "center",
      marginTop: 15,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
   },
   touchableOpacityIcon: {
      borderWidth: 1,
      borderColor: "orange",
      backgroundColor: 'orange',
      padding: 5,
      borderRadius: 100,
      width: 30,
      height: 30,
      textAlign: "center",
      justifyContent: 'center',
      margin: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
   }
});
 

export default TextScreen;