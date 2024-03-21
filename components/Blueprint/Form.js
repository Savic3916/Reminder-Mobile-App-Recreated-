import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

import { myColor } from '../../constant/style/Colors';

export default function Form({ type, label1, label2, label3, textInputConfig1, textInputConfig2, textInputConfig3, fullNameIsValid, emailIsValid, passwordIsValid }) {

  if(type === 'signIn'){
    return (
        <View style={[styles.container, {marginTop: 15}]}>
          <Text style={styles.text}>{label2}</Text>
          <TextInput style={[styles.textInput, {borderColor: emailIsValid? myColor.gray : myColor.red}]} {...textInputConfig2}/>
          <Text style={styles.text}>{label3}</Text>
          <TextInput style={[styles.textInput, {borderColor: passwordIsValid? myColor.gray : myColor.red}]} {...textInputConfig3}/>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label1}</Text>
      <TextInput style={[styles.textInput, {borderColor: fullNameIsValid? myColor.gray : myColor.red}]} {...textInputConfig1}/>
      <Text style={styles.text}>{label2}</Text>
      <TextInput style={[styles.textInput, {borderColor: emailIsValid? myColor.gray : myColor.red}]} {...textInputConfig2}/>
      <Text style={styles.text}>{label3}</Text>
      <TextInput style={[styles.textInput, {borderColor: passwordIsValid? myColor.gray : myColor.red}]} {...textInputConfig3}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }, 
  textInput: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    marginVertical: 8
  },
  text: {
    fontWeight: 'bold',
  }
})