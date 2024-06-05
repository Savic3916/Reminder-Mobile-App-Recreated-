import { StyleSheet, Pressable } from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { myColor } from '../../constant/style/Colors';

export default function CancelButton({onPress}) {
  return (
    <Pressable 
        style={({pressed}) => pressed && pressed}
        onPress={onPress}>
      <MaterialIcons name="cancel" size={24} color={myColor.red} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})