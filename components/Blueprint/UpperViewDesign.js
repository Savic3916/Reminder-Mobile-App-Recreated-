import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import LittleCards from './LittleCards';

import { myColor } from '../../constant/style/Colors';


export default function UpperViewDesign({ mode }) {

  const text = `${mode} with one of the following options`;
  
  return (
    <View>
      <Text style={styles.welcomeText}> {text} </Text>
      <View style={styles.littleCardContainer}>
        <LittleCards source={require('../../assets/icons/google.png')}/>
        <LittleCards source={require('../../assets/icons/facebook.png')}/>
        <LittleCards source={require('../../assets/icons/twitter.png')}/>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 15}}>
        <View style={styles.line}/>
          <Text style={{fontWeight: 'bold', color: myColor.gray}}> Or </Text>
        <View style={styles.line}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
})