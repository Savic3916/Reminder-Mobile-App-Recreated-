import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { myColor } from './constant/style/Colors';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

const Stack = createNativeStackNavigator();

function Authenticated(){

};

function Auth(){
  return(
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name='Sign up' component={SignUp} options={{
          headerStyle: {
           backgroundColor: myColor.green, 
          },
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name='Sign in' component={SignIn} options={{
          headerStyle: {
            backgroundColor: myColor.green,
          },
          headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function ScreenToLoad(){
  return (
    <Auth/>
  )
}

export default function App() {
  return (
    <ScreenToLoad/>
  );
}
