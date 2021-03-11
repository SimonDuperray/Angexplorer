import React from "react";
import { 
   StyleSheet, 
   View, 
   Text, 
   Dimensions,
   TouchableOpacity,
   Image
} from "react-native";
// import MapView, { Marker } from "react-native-maps";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LATITUDE = 47.47044;
const LONGITUDE = -0.54611;
const LATITUDE_DELTA = 0.0075;
const LONGITUDE_DELTA = 0.0075;
const SPACE = 0.01;

export default class Maps extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
         },
         markers_completed: [
            {
               title: "Jardin du Mail",
               coordinate: {
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
               },
               color: "red",
               id: 1,
               redirectTo: "FirstEvent"
            },
            {
               title: "Librairie Contact",
               coordinate: {
                  latitude: LATITUDE+SPACE/6,   
                  longitude: LONGITUDE-SPACE/6
               },
               color: "green",
               id: 2,
               redirectTo: "SecondEvent"
            },
            {
               title: "Crêperie des Angles",
               coordinate: {
                  latitude: LATITUDE-SPACE/6,
                  longitude: LONGITUDE-SPACE/6
               },
               color: "yellow",
               id: 3,
               redirectTo: "ThirdEvent"
            },
            {
               title: "Vous êtes ici",
               coordinate: {
                  latitude: LATITUDE+SPACE/10,
                  longitude: LONGITUDE+SPACE/10
               },
               color: 'green',
               id: 4,
               redirectTo: "Maps"
            }
         ],
      };
   }

   getCompletedMarkers() {
      return this.state.markers_completed.map((data) => {
         return (
            <View key={data.id}>
               <Marker
                  coordinate={data.coordinate}
                  onPress={() => {
                     this.props.navigation.navigate(data.redirectTo);
                  }}
               >
                  <View style={styles.callout}>
                     {
                        data.id === 4 ?
                        (
                           <Text style={styles.hereTitle}>
                              {data.title}
                           </Text>
                        ) : (
                           <Text style={styles.title}>
                              {data.title}
                           </Text>
                        )
                     }
                  </View>
                  <Text style={{ marginTop: 7 }}>
                     {
                        data.id === 4 ?
                        (
                           <MaterialIcons
                              name="location-pin"
                              color="green"
                              size={15}
                           />
                        ) : (
                           <MaterialIcons
                              name="location-pin"
                              color="#FF6666"
                              size={25}
                           />
                        )
                     }
                  </Text>
               </Marker>
            </View>
         )
      })
   }
   
   render() {
      // const { region } = this.state;
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image
                     animation="bounceIn"
                     duraton='1500'
                  source={require("../assets/logocompletnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               />
               {/* <Text style={styles.brandHeader}>Angerxplorer</Text> */}
               {/* <TouchableOpacity
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
               </TouchableOpacity> */}
            </View>
            <View style={styles.footer}>
               {/* <MapView
                  provider={this.props.provider}
                  style={styles.logo}
                  initialRegion={region}
                  zoomTapEnabled={false}
               >
                  { this.getCompletedMarkers() }
               </MapView> */}
               <TouchableOpacity
                  onPress={() => {
                     this.props.navigation.navigate("FirstEvent")
                  }}
               >
                  <Image
                     style={styles.map}
                     source={require("../assets/map.PNG")}
                  />
               </TouchableOpacity>
            </View>
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
      flex: 0.5, 
      justifyContent: "center",
      alignItems: 'center'
   },
   footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center'
   },
   logo: {
      height: height_logo,
      width: height_logo,
   },
   map: {
      height: height_logo+180,
      width: height_logo+30,
   },
   callout: {
      backgroundColor: "#fff",
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
      borderWidth: 1,
      borderColor: '#C2B6B3',
      opacity: 0.7,
   },
   title: {
      color: "#000",
      fontSize: 14,
      lineHeight: 18,
      flex: 1,
   },
   hereTitle: {
      color: "#000",
      fontSize: 10,
      lineHeight: 15,
      flex: 1,
   },
   description: {
      color: "#707070",
      fontSize: 12,
      lineHeight: 16,
      flex: 1
   },
   brandHeader: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 20
   },
});