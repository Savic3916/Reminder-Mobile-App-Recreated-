import { StyleSheet, Pressable, View } from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { myColor } from '../../constant/style/Colors';

export default function CancelButton({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name="cancel" size={24} color={myColor.red} />
    </Pressable>
  )
}

const styles = StyleSheet.create({

})