import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react';

import { useSelector } from 'react-redux';

export default function ChosenDailyReminderList() {

    const dailyReminder = useSelector((state) => state.dailyReminders.dailyReminders);
    console.log(dailyReminder)
  return (
    <FlatList />
  )
}

const styles = StyleSheet.create({})