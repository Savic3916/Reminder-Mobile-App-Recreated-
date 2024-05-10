import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';


export default function DailyReminderCircle({ tintColor, source, buttonPressHandler, modalVisible, borderStyle, backgroundColor, borderColor, text }) {

  return (
      <View style={{alignItems: 'center'}}>
        <View style={[styles.addNewDailyReminder, {backgroundColor: backgroundColor, borderStyle: borderStyle, borderColor: borderColor}]}>
          <Pressable 
            style={({pressed}) => pressed && styles.pressed} onPress={buttonPressHandler} modalOn={modalVisible}
          >
          <Image style={[styles.image, {tintColor: tintColor}]} source={source}/>
          </Pressable>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  addNewDailyReminder: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 6,
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2
  },
  image: {
    width: 20,
    height: 20,
  },
  pressed: {
    opacity: 0.4,
  },
  text: {
    fontWeight: 'bold',
  }
})