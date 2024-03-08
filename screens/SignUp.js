import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LittleCards from '../components/Blueprint/LittleCards';
import Form from '../components/Blueprint/Form';
import Buttons from '../components/Blueprint/Buttons';

import { myColor } from '../constant/style/Colors';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}> Sign up with one of the following options </Text>
      <View style={styles.littleCardContainer}>
        <LittleCards source={require('../assets/icons/google.png')}/>
        <LittleCards source={require('../assets/icons/facebook.png')}/>
        <LittleCards source={require('../assets/icons/twitter.png')}/>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 15}}>
        <View style={styles.line}/>
          <Text style={{fontWeight: 'bold', color: myColor.gray}}> Or </Text>
        <View style={styles.line}/>
      </View>
      <Form 
        type='signUp' 
        label1='Full Name' 
        label2='E-mail' 
        label3='Password'
        textInputConfig1={{placeholder: 'First name', placeholderTextColor: myColor.lightGray}}
        textInputConfig2={{placeholder: 'Email', placeholderTextColor: myColor.lightGray}}
        textInputConfig3={{placeholder: 'Password', placeholderTextColor: myColor.lightGray}}
      />
      <Buttons title='Create Account' buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}/>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.bottomText}> Already have an account? </Text>
        <Text style={[styles.bottomText, {color: myColor.green}]}> Sign in </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
    paddingTop: '15%',
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  littleCardContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%'
  },
  line: {
    width: '45%',
    borderBottomColor: myColor.lightGray,
    borderBottomWidth: 1,
  }, 
  buttonStyle: {
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: myColor.green,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonTextStyle: {
    textAlign: 'center', 
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    fontSize: 15,
  },
  bottomText: {
    fontSize: 15,
    fontWeight: 'bold',

  }
});