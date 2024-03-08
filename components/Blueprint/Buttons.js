import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';


export default function Buttons({ title, buttonStyle, buttonTextStyle, onPress }) {
  return (
    <View style={{padding: 10}}>
        <Pressable style={buttonStyle} onPress={onPress}>
            <Text style={buttonTextStyle}>{title}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    
})