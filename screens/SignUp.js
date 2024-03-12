import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Form from '../components/Blueprint/Form';
import Buttons from '../components/Blueprint/Buttons';
import UpperViewDesign from '../components/Blueprint/UpperViewDesign';

import { myColor } from '../constant/style/Colors';
import LowerViewDesign from '../components/Blueprint/LowerViewDesign';

export default function SignUp({  }) {
  return (
    <View style={styles.container}>
      <UpperViewDesign mode={'Sign Up'}/>
      <Form 
        type='signUp'
        label1='Full Name' 
        label2='E-mail' 
        label3='Password'
        textInputConfig1={{placeholder: 'First name', placeholderTextColor: myColor.lightGray}}
        textInputConfig2={{placeholder: 'Email', placeholderTextColor: myColor.lightGray}}
        textInputConfig3={{placeholder: 'Password', placeholderTextColor: myColor.lightGray}}
      />
      <LowerViewDesign/>
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