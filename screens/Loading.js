import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../assets/logoreduitnoir.svg';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 200, height: 300, aspectRatio: 2/3}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDB934',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
