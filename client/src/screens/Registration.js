import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TextInput, ImageBackground, View, TouchableOpacity, Text } from 'react-native';
import Context from '../utils/context.js'
import { registration } from '../services/http.service.js';

export const Registration = ({navigation}) => {

  const context = useContext(Context);

  useEffect(() => {
    setName(context.userState.name),
      setSurname(context.userState.surname),
      setEmail(context.userState.email),
      setPassword(context.userState.password),
      setName(''),
      setSurname(''),
      setEmail(''),
      setPassword('')
  }, [])

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function registrationBtn() {

    const res = await registration({ name, surname, email, password });
    context.setData({ name, surname, email, password })
    if (res) {
      navigation.navigate('Login')
    }
  }

  return (
    <ImageBackground source={require('../../assets/headerPic2.jpg')} style={styles.imageBackground}>
      <View style={styles.view} >
        <TextInput placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input} />
        <TextInput placeholder="Surname"
          value={surname}
          onChangeText={text => setSurname(text)}
          style={styles.input} />
        <TextInput placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} />
        <TextInput placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input} />
        <TouchableOpacity onPress={registrationBtn} style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save</Text>
        </TouchableOpacity>
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
  input: {
    height: 40,
    marginBottom: 5,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white'
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  containerSwitch: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 35,
    borderRadius: 50,
    width: 130,
    margin: 15
  },
  saveBtnText: {
    color: 'white'
  },
});

