import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Form from '../components/Blueprint/Form';
import UpperViewDesign from '../components/Blueprint/UpperViewDesign';
import LowerViewDesign from '../components/Blueprint/LowerViewDesign';

import { myColor } from '../constant/style/Colors';
import { createUser, signupNewUser } from '../util/auth';
import LoadingOverlay from '../components/Blueprint/LoadingOverlay';

export default function SignUp({  }) {

  // show an activity indicator when sening to the backend
  const [isSending, setIsSending] = useState(false);

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [inputsValidity, setInputValidity] = useState({
    fullNameValidity: true,
    emailValidity: true,
    passwordValidity: true,
  });

  function changeTextHandler(objectName, newText){
    setInputs((currentInputs) => {
      return (
        {...currentInputs,
                          [objectName] : newText
        }
      )
    })
  };

  function validateForm(){
    const formObj = {
      fullName: inputs.fullName,
      password: inputs.password,
      email: inputs.email,
    };

    const fullNameIsValid = formObj.fullName.trim().length > 2 && formObj.fullName.includes(' ');
    const emailIsValid = formObj.email.trim().length > 11 && formObj.email.includes('@') && !formObj.email.includes(' ');
    const passwordIsValid = formObj.password.trim().length >= 8;

    setInputValidity({
      fullNameValidity: fullNameIsValid,
      passwordValidity: passwordIsValid,
      emailValidity: emailIsValid,
    });

    // async function validatedHandler(){
    //   const {email, password} = formObj;
    //   setIsSending(true);
    //   const response = await signupNewUser('signUp', email, password);
    //   setIsSending(false);
    // };

    if(!fullNameIsValid || !passwordIsValid || !emailIsValid){
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
    }
    // validatedHandler();
  };

  if(isSending){
    return (
      <LoadingOverlay/>
    )
  };

  return (
    <View style={styles.container}>
      <UpperViewDesign mode={'Sign Up'}/>
      <Form 
        type='signUp'
        label1='Full Name' 
        label2='E-mail' 
        label3='Password'
        textInputConfig1={{placeholder: 'John Doe', placeholderTextColor: myColor.lightGray, onChangeText: (e) => changeTextHandler('fullName', e)}}
        textInputConfig2={{placeholder: 'johndoe@gmail.com', placeholderTextColor: myColor.lightGray, onChangeText: (e) => changeTextHandler('email', e)}}
        textInputConfig3={{placeholder: '**********', placeholderTextColor: myColor.lightGray, secureTextEntry: true, onChangeText: (e) => changeTextHandler('password', e)}}
        fullNameIsValid={inputsValidity.fullNameValidity}
        emailIsValid={inputsValidity.emailValidity}
        passwordIsValid={inputsValidity.passwordValidity}
      />
      <LowerViewDesign mode= 'sign up' onPress={validateForm}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
    paddingTop: '15%',
  },
});