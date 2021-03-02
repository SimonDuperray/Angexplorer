import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ListScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.brandHeader}>Angexplorer</Text>
            </View>
            <View style={styles.footer}>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate('Text')
                  }}
               >
                  <Text>Text Component</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate('Video')
                  }}
               >
                  <Text>Video Component</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this.props.navigation.navigate('Game')
                  }}
               >
                  <Text>Game Component</Text>
               </TouchableOpacity>
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
   button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginVertical: 10,
      borderRadius: 10
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
});

export default ListScreen;