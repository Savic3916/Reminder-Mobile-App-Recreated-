import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react';

import { myColor } from '../../constant/style/Colors'

export default function LittleCards({ source, onPress}) {
  return (
      <View style={styles.littleCardContainer}>
        <Pressable  onPress={onPress}>
            <Image source={source} style={styles.image}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    littleCardContainer: {
        borderRadius: 7,
        backgroundColor: myColor.lightGreen,
        padding: 8,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        height: 35,
        width: 35,
    }
})