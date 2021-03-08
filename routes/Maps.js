import React from "react";
import { 
   StyleSheet, 
   View, 
   Text, 
   Dimensions,
   Image
} from "react-native";
import MapView, {
   Marker,
   Callout,
   CalloutSubview,
   ProviderPropType
} from "react-native-maps";
import CustomCallout from "./CustomCallout";

const { width_s, height_s } = Dimensions.get('screen');
const ASPECT_RATIO = width_s / height_s;
const LATITUDE = 47.47044;
const LONGITUDE = -0.54611;
const LATITUDE_DELTA = 0.0075;
const LONGITUDE_DELTA = 0.0075;
const SPACE = 0.01;


export default class Maps extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         cnt: 0,
         region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
         },
         markers: [
            {
               coordinate: {
                  latitude: LATITUDE + SPACE,
                  longitude: LONGITUDE + SPACE,
               },
               coordinate: {
                  latitude: LATITUDE + SPACE,
                  longitude: LONGITUDE - SPACE,
               },
               coordinate: {
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
               },
               coordinate: {
                  latitude: LATITUDE,
                  longitude: LONGITUDE - SPACE / 2,
               },
            },
         ],
      };
   }

   show() {
      this.marker1,showCallout();
   }
   
   hide() {
      this.marker1.hideCallout();
   }
   render() {
      const { region, markers } = this.state;
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               {/* <Animatable.Image
                     animation="bounceIn"
                     duraton='1500'
                  source={require("../assets/logocompletnoir.svg")}
                  style={styles.logo}
                  resizeMode="stretch"
               /> */}
               <Text>Angerxplorer</Text>
            </View>
            <View style={styles.footer}>
               <MapView
                  provider={this.props.provider}
                  style={styles.logo}
                  initialRegion={region}
                  zoomTapEnabled={false}
               >
                  <Marker
                     title="Title marker"
                     description="Description marker"
                     coordinate={{
                        longitude: LONGITUDE,
                        latitude: LATITUDE,
                        longitudeDelta: LONGITUDE_DELTA,
                        latitudeDelta: LATITUDE_DELTA
                     }}
                  />
               </MapView>
            </View>
         </View>
      );
   }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.37;

const { map_height } = Dimensions.get('screen');
const height_map = map_height * 37;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FDB934"
   },
   header: {
      flex: 1, 
      justifyContent: "center",
      alignItems: 'center'
   },
   footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center'
   },
   logo: {
      height: height_logo+200,
      width: height_logo+50,
   },
   // map: {
   //    height: height_map,
   //    width: height_map
   // }
});