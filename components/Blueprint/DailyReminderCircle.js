import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { myColor } from '../../constant/style/Colors';


export default function DailyReminderCircle({ textStyle, text, backgroundColor, tint, borderType, source, borderColor, onPress }) {

  return (
    <View style={{alignItems: 'center', marginBottom: 6,}}>
      <Pressable 
        style={({pressed}) => pressed? 
                            [styles.imageContainer, {backgroundColor: backgroundColor, borderStyle: borderType, borderColor: borderColor}, styles.pressed] :
                            [styles.imageContainer, {backgroundColor: backgroundColor, borderStyle: borderType, borderColor: borderColor}]}
        android_ripple={{color: myColor.green, radius: 30}}
        onPress={onPress}
      >
        <Image style={[styles.image, {tintColor: tint}]} source={source}/>
      </Pressable>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginBottom: 4,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
  pressed: {
    // backgroundColor: 'red',
    opacity: 0.7,
  },
})