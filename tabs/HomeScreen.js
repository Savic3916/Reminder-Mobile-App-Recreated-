import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import ImageDisplay from '../components/Blueprint/ImageDisplay';

import { myColor } from '../constant/style/Colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import DailyReminderCircle from '../components/Blueprint/DailyReminderCircle';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-Light.ttf'),
    'Sedan': require('../assets/fonts/Sedan-Regular.ttf'),
    'Jersey': require('../assets/fonts/Jersey15-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
          <View style={{marginTop: 30,}}>
            <Text style={[styles.text, { letterSpacing: 2 }]}> Hi Kristine! </Text>
            <Text style={[styles.text, {fontSize: 17}]}>  You have 5 tasks today... </Text>
          </View>
          <ImageDisplay/>
      </View>
      <View>

      </View>
      <View style={styles.dailyReminderContainer}>
            <Text style={[styles.dailyReminderText, {fontFamily: 'Jersey15-Regular'}]}> Daily Reminder </Text>
            <Text style={[styles.dailyReminderText, {color: myColor.lightGray, fontSize: 14, marginTop: 8, fontWeight: '400'}]}> Your daily reminder to maintain your <Text> {'\n'} daily routine </Text></Text>
      </View>
      <View style={styles.dailyRemindersContent}>
        <DailyReminderCircle color={myColor.midGreen}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: myColor.white,
  },
  container:{
    flexDirection: 'row',
    height: '20%',
    backgroundColor: myColor.green,
    padding: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  dailyReminderContainer: {
    marginTop: 30,
    padding: 8
  },
  dailyReminderText: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  dailyRemindersContent: {
    flexDirection: 'row',
    padding: 8,
    // backgroundColor: 'red'
  },
  
})