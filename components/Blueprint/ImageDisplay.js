import { StyleSheet, Image, View, Pressable, } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { myColor } from '../../constant/style/Colors';


export default function ImageDisplay() {
  const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    
  return (
    <View>
      <Pressable 
        style={({pressed}) => pressed? [styles.container, styles.fade] : styles.container}
        onPress={pickImage}  
      >
        {image != null && <Image source={{uri: image}}style={styles.profilePhoto}/>}
      </Pressable>
      <View style={image == null? [styles.iconContainer, {backgroundColor: myColor.green}] : 
                                  [styles.iconContainer, {backgroundColor: myColor.white}]
    }>
        <Image source={require('../../assets/icons/camera.png')} style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 55,
      height: 55,
      borderRadius: 55,
      marginTop: 30,
      backgroundColor: myColor.lightGreen,
      position: 'relative',
      shadowColor: 'black',
      shadowOffset: {height: 1, width: 1},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      overflow: 'hidden'

    },
    iconContainer: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      left: 27,
      top: -25,
      borderWidth: 1.5,
      shadowColor: 'black',
      shadowOffset: {height: 1, width: 1},
      shadowOpacity: 0.3,
      shadowRadius: 3,

    },
    profilePhoto: {
      width: 55,
      height: 55,
    },
    image: {
      width: 15,
      height: 15,
      tintColor: myColor.black,
    },
    fade: {
      opacity: 0.3,
    }
})