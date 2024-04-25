import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { myColor } from '../../constant/style/Colors';

export default function DailyReminderCircle({ color }) {
  return (
    <View style={[styles.addNewDailyReminder, {backgroundColor: color}]}/>
  )
}

const styles = StyleSheet.create({
  addNewDailyReminder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: myColor.midGreen,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: myColor.green
  }
})