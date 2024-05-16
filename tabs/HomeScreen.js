import { StyleSheet, Text, View, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import ImageDisplay from '../components/components/ImageDisplay';
import * as SplashScreen from 'expo-splash-screen';
import DailyReminderCircle from '../components/Blueprint/DailyReminderCircle';
import CancelButton from '../components/components/CancelButton';
import DailyReminderList from '../components/components/DailyReminderList';

import { myColor } from '../constant/style/Colors';
import { useFonts } from 'expo-font';
import Buttons from '../components/Blueprint/Buttons';

// SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  function buttonPressHandler(){
    setModalVisible(true)
  };
  function buttonCloseModal() {
    setModalVisible(false);
  }
  
  // const [fontsLoaded, fontError] = useFonts({
  //   'Roboto': require('../assets/fonts/Roboto-Light.ttf'),
  //   'Sedan': require('../assets/fonts/Sedan-Regular.ttf'),
  //   // 'Jersey': require('../assets/fonts/Jersey15-Regular.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
          <View style={{marginTop: 30,}}>
            <Text style={[styles.text, { letterSpacing: 3 }]}> Hi Kristine! </Text>
            <Text style={[styles.text, {fontSize: 17, letterSpacing: 1}]}>  You have 5 tasks today... </Text>
          </View>
          <ImageDisplay/>
      </View>
      <View>
      </View>
      <View style={styles.dailyReminderContainer}>
            <Text style={[styles.dailyReminderText, /*{fontFamily: 'Sedan'}*/]}> Daily Reminder </Text>
            <Text style={[styles.dailyReminderText, {color: myColor.lightGray, fontSize: 15, marginTop: 3, fontWeight: 'bold'}]}>  Your daily reminder to maintain your <Text> {'\n'}  daily routine </Text></Text>
      </View>
      <View style={styles.dailyRemindersContent}>
        <DailyReminderCircle 
          color={myColor.midGreen} 
          source={require('../assets/icons/add.png')} 
          modalOn={modalVisible} 
          buttonPressHandler={buttonPressHandler}
          borderStyle='dashed'
          backgroundColor= {myColor.midGreen}
          borderColor= {myColor.green}
        />
      </View>
      <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalHalfWhiteBox}>
            <View style={styles.cancelButtonView}>
              <CancelButton onPress={buttonCloseModal}/>
            </View>
            <DailyReminderList/>
            <View>
              <Buttons title='Pick Time' buttonStyle={styles.buttonStyle}/>
            </View>
          </View>

        </View>
      </Modal>
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
    height: '18%',
    backgroundColor: myColor.green,
    padding: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 4,
    //fontFamily: 'Roboto',
  },
  dailyReminderContainer: {
    marginTop: '20%',
    padding: 8
  },
  dailyReminderText: {
    fontSize: 32,
    fontWeight: 'bold',

  },
  dailyRemindersContent: {
    flexDirection: 'row',
    padding: 8,
  },
  modalView: {
    flex: 1,
    opacity: 0.97,
    backgroundColor: myColor.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHalfWhiteBox: {
    width: '85%',
    height: '45%',
    backgroundColor: myColor.white,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: '0.4',
    elevation: 3,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  cancelButtonView: {
    position: 'absolute',
    right: 0,
    top: 4,
  },
  buttonStyle: {
    backgroundColor: myColor.green,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 15
  }
})