import { StyleSheet, ActivityIndicator, View,  } from 'react-native'
import React from 'react'
import { myColor } from '../../constant/style/Colors'

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={myColor.gray}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: myColor.white,
    }
})