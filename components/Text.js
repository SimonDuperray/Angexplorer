import React from "react";
import {
   StyleSheet,
   Text,
   View,
   Image
} from "react-native";

class TextComp extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.brandHeader}>Angexplorer</Text>
               <Text style={styles.textHeader}>{this.props.place}</Text>
               <Text style={styles.accountRedirectionText}>My Account</Text>
            </View>
            <View style={styles.footer}>
               <Image source={this.props.image} style={{ aspectRatio: 2/3, height: 150, borderRadius: 5, marginBottom: 30 }} />
               <Text style={{ marginBottom: 20 }}>
                  {this.props.introduction}
               </Text>
               <Text>
                  {this.props.description}
               </Text>
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
   }
}); 

export default TextComp;