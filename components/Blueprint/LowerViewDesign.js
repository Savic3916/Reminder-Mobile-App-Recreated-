import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Buttons from './Buttons';

import { myColor } from '../../constant/style/Colors';
import { useNavigation } from '@react-navigation/native';

export default function LowerViewDesign({ mode, onPress }) {

    const navigation = useNavigation();

    function signInTextPressHandler(){
        navigation.replace('Sign in')
    };

  return (
    <View>
      <Buttons title='Create Account' buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle} onPress={onPress}/>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {mode == 'sign Up'? 
                <Text style={styles.bottomText}> Already have an account? </Text>
                :
                <Text style={styles.bottomText}> Don't have an account? </Text>
        }
        <Pressable onPress={signInTextPressHandler}>
          <Text style={[styles.bottomText, {color: myColor.green}]}> Sign in </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonStyle: {
      padding: 10,
      borderRadius: 8,
      marginTop: 16,
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
})