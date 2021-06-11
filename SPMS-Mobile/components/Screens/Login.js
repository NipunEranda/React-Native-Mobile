import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Image } from 'react-native';
import UserObject from '../../Controller/UserController';

const Login = ({ navigation }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const loginInputHandlerEmail = (enteredEmail) => {
    setEnteredEmail(enteredEmail);
  }

  const loginInputHandlerPassword = (enteredPassword) => {
    setEnteredPassword(enteredPassword);
  }

  /*Login Validation Process*/
  const LoginHandler = async () => {
    var response = JSON.parse((await UserObject.login(enteredEmail, enteredPassword)).toString());
    if (response.data.status == 200) {
      navigation.replace('Home');
      navigation.navigate("Home");
    } else {
      console.log("fail!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      </View>
      <View>
        <TextInput style={styles.textInput} placeholder="Username" onChangeText={loginInputHandlerEmail} value={enteredEmail} />
        <TextInput style={styles.textInput} placeholder="Password" onChangeText={loginInputHandlerPassword} value={enteredPassword} />
        <Button title="LOGIN" onPress={LoginHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginBottom: 20
  },
  container: {
    paddingTop: 150,
    padding: 30
  },
  logo: {
    width: 100,
    height: 100
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
});

export default Login;