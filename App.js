import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { myColor } from './constant/style/Colors';
import { Provider, useSelector } from 'react-redux';
import { store } from './util/redux/store';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function Auth(){
  return(
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
  );
};

function Authenticated(){
  return(
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={HomeScreen} options={{}}/>
      </Stack.Navigator>
  )
};

function ScreenToLoad(){
  const token = useSelector((state) => state.auth.token);
  if(token === null){
    return (
      <NavigationContainer>
        <Auth/>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Authenticated/>
      </NavigationContainer>
    )
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <ScreenToLoad/>
    </Provider>
  );
}
