import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'
import React from 'react'
import { myColor } from '../../constant/style/Colors'

export default function LoadingOverlay({ text }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={myColor.gray}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColor.white,
    },
    text: {
      paddingTop: 15,
      fontWeight: 'bold',
      fontSize: 16,
      letterSpacing: 1,
      color: myColor.gray,
    }
})