import { StyleSheet, Text, View, Modal } from 'react-native';
import React, { useState } from 'react';
import CancelButton from './CancelButton';
import DailyReminderList from './DailyReminderList';
import Buttons from '../Blueprint/Buttons';

import { myColor } from '../../constant/style/Colors';

export default function ModalContainer({ modalVisible, setModalVisible }) {

    function buttonCloseModal() {
        setModalVisible(false);
    }

  return (
    <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalHalfWhiteBox}>
            <View style={styles.cancelButtonView}>
              <CancelButton onPress={buttonCloseModal}/>
            </View>
            <DailyReminderList/>
          </View>

        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
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
    },
    cancelButtonView: {
        position: 'absolute',
        right: 0,
        top: 4,
    },
})