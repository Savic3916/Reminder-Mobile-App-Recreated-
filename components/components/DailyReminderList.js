import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DailyReminderCircle from '../Blueprint/DailyReminderCircle'
import { myColor } from '../../constant/style/Colors'

export default function DailyReminderList() {
  return (
    <View style={styles.container}>
        <View style={styles.reminderListView}>
            <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/breakfast.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Eat'
            />
            <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/exercise.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Exercise'
            />
             <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/meditation.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Meditate'
            />
             <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/milk-bottle.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Drink Milk'
            />
             <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/walk.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Walk'
            />
        </View>
        <View style={styles.reminderListView}>
            <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/open-book.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Read'
            />
            <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/guitar.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Music'
            />
             <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/jogging.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Jog'
            />
             <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/shower.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Shower'
            />
             <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/slumber.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Sleep'
            />
        </View>
        <View style={styles.reminderListView}>
            <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/bed.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Make Bed'
            />
            <DailyReminderCircle 
                color={myColor.gray} 
                source={require('../../assets/icons/writing.png')} 
                borderStyle='solid'
                backgroundColor = {myColor.lightGray}
                borderColor = {myColor.lightGray}
                tintColor={myColor.green}
                text='Write'
            />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: 'red'
        
    },
    reminderListView: {
        flexDirection: 'row',
        marginTop: '5%',

    }
})