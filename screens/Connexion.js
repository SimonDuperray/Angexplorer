import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Touchable, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'react-native-svg';

// export default function App() {
const App = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });
  const textInputChange = (val) => {
    if(val.length != 0){
      setData({
        ... data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ... data,
        email: val,
        check_textInputChange: false
      });
    }
  }
  const handlePasswordChange = (val) => {
    setData({
      ... data,
      password: val
    });
  }
  const updateSecureTextEntry = () => {
    setData({
      ... data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandHeader}>Angexplorer</Text>
        {/* <Text style={styles.welcomeText}>Welcome Simon !</Text> */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your email"
            style={styles.TextInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {
            data.check_textInputChange ? 
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
            : null 
            }
        </View>
        <Text style={styles.textFooter, {marginTop:35}}>Password</Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.TextInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
              :
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9nod']}
              style={styles.signIn}
            >
              <Text style={styles.signIn, {color:"#fff"}}>Sign In</Text>
            </LinearGradient>
            <TouchableOpacity
              onPress=({() => navigator.})
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
  welcomeText: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic'
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
