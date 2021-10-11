import React, { useState, useContext } from 'react';
import { ImageBackground, Text, TouchableOpacity, TouchableHighlight, StyleSheet, TextInput, View, Alert } from 'react-native';
import { logIn } from '../services/http.service.js';
import Context from '../utils/context.js';

export const Login = ({ navigation }) => {

  const context = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginBtn() {
    if (email === '' || password === '') {
      return Alert.alert(`Fields shouldn't be empty!`)
    }

    const res = await logIn({ email, password });
    if (res) {
      // context.handleSetData({ email, password})
      navigation.navigate('Profile')
    }
    else {
      Alert.alert("Incorrect email or password!")
    }
  }

  return (
    <ImageBackground source={require('../../assets/headerPic2.jpg')} style={styles.imageBackground}>
      <View style={styles.view}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <TextInput placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} />
        <TextInput placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input} />
        <TouchableOpacity onPress={loginBtn} style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginWithPhone')} style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Log in with phone</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => navigation.navigate('Registration')} >
          <Text>Registration</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  imageBackground: {
    height: '101%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 35,
    borderRadius: 50,
    width: 130,
    margin: 15
  },
  btnLoginText: {
    color: 'white'
  },
  input: {
    height: 40,
    marginBottom: 5,
    width: 200,
    borderEndColor: 'gray',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
