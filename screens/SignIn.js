import { Alert, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import UpperViewDesign from '../components/Blueprint/UpperViewDesign';
import Form from '../components/Blueprint/Form';
import LowerViewDesign from '../components/Blueprint/LowerViewDesign';

import { myColor } from '../constant/style/Colors';
import { loginUser } from '../util/auth';
import LoadingOverlay from '../components/Blueprint/LoadingOverlay';

export default function SignIn() {

  const [isSending, setIsSending] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [inputsValidity, setInputValidity] = useState({
    emailValidity: true,
    passwordValidity: true,
  });

  function changeTextHandler(inputIdentifier, newValue){
    setInputs((currentInputs) => {
      return(
        {...currentInputs, 
         [inputIdentifier] : newValue,
        }
      )
    })
  };

  function validateForm(){

    const formObj = {
      email: inputs.email,
      password: inputs.password,
    };

    const emailIsValid = formObj.email.trim().length > 11 && formObj.email.includes('@') && !formObj.email.includes(' ');
    const passwordIsValid = formObj.password.trim().length > 8;

    setInputValidity({
      emailValidity: emailIsValid,
      passwordValidity: passwordIsValid,
    })

    async function validateHandler(){
      setIsSending(true);
      try {
        const {email, password} = formObj;
        await loginUser(email, password);
      } catch (error) {
        Alert.alert('Signin error', 'Check your credentials', [
          {
            text: 'Ok', 
            // onPress: () => console.log('Pressed!!'),
          }
        ]);
      }
      setIsSending(false);
    };

    if(!emailIsValid || !passwordIsValid){
      Alert.alert('Invalid Inputs', 'Check your inputs', [
        { 
          text: 'Ok',
          style: 'default',
        },
        {
          text: 'Cancel',
          style: 'default'
        },
      ]);
      return;
    };

    validateHandler();
  };

  if(isSending){
    return (
      <LoadingOverlay text='Logging in users...'/>
    );
  };

  return (
    <View style={styles.container}>
      <UpperViewDesign mode={'Sign In'}/>
      <Form 
        type='signIn'
        label2='E-mail' 
        label3='Password'
        textInputConfig2={{placeholder: 'johndoe@gmail.com', placeholderTextColor: myColor.lightGray, onChangeText: (e) => changeTextHandler('email', e)}}
        textInputConfig3={{placeholder: '**********', placeholderTextColor: myColor.lightGray, secureTextEntry: true, onChangeText: (e) => changeTextHandler('password', e)}}
        emailIsValid={inputsValidity.emailValidity}
        passwordIsValid={inputsValidity.passwordValidity}
      />
      <LowerViewDesign mode = 'sign in' onPress={validateForm}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
    paddingTop: '15%',
  }
})