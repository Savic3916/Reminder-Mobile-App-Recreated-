import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import DailyReminderCircle from '../Blueprint/DailyReminderCircle';

import { myColor } from '../../constant/style/Colors';
import { useSelector, useDispatch } from 'react-redux';
import Buttons from '../Blueprint/Buttons';
import { addToDailyReminder } from '../../util/redux/dailyReminderSlice';

export default function DailyReminderList() {

  // APP WIDE STATE
    const reminders = useSelector((state) => state.dailyReminders.reminders);
    const dailyReminder = useSelector((state) => state.dailyReminders.dailyReminders);
    const dispatch = useDispatch();

    function individualReminderCirlePressedHandler(id){
      const singleReminder = reminders.filter((currReminders) => currReminders.id === id);
      dispatch(addToDailyReminder([...dailyReminder, ...singleReminder]));
    };


  return (
    <View style={styles.container}>
      <FlatList
            data={reminders}
            renderItem={({item}) => 
                                <DailyReminderCircle
                                    text={item.title}
                                    backgroundColor={myColor.lightGray}
                                    tint={myColor.green}
                                    source={item.image}
                                    borderColor={myColor.lightGray}
                                    textStyle={styles.textStyle}
                                    onPress={() => individualReminderCirlePressedHandler(item.id)}
                                />
            }
            keyExtractor={item => item.id}
            numColumns={5}
      />
      <View style={styles.buttonView}>
          <Buttons 
            title='Pick Time' 
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    buttonStyle: {
      backgroundColor: myColor.green,
      borderRadius: 12,
      paddingVertical: 4,
      paddingHorizontal: 15,
      shadowColor: 'black',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2,
  },
  buttonView: {
      alignItems:'center'
  },
  buttonTextStyle: {
      fontWeight: 'bold',
      color: myColor.white,
  },
  textStyle: {
      fontWeight: 'bold',
  }
})