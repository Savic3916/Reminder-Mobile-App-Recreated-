import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UpperViewDesign from '../components/Blueprint/UpperViewDesign';
import Form from '../components/Blueprint/Form';
import LowerViewDesign from '../components/Blueprint/LowerViewDesign';

import { myColor } from '../constant/style/Colors';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <UpperViewDesign mode={'Sign In'}/>
      <Form 
        type='signIn'
        label2='E-mail' 
        label3='Password'
        textInputConfig2={{placeholder: 'johndoe@gmail.com', placeholderTextColor: myColor.lightGray}}
        textInputConfig3={{placeholder: '**********', placeholderTextColor: myColor.lightGray}}
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
  }
})