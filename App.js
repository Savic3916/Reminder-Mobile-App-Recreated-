import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { myColor } from './constant/style/Colors';
import { Provider, useSelector } from 'react-redux';
import { store } from './util/redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import HomeScreen from './tabs/HomeScreen';
import SetReminders from './tabs/SetReminders';
import Reminders from './tabs/Reminders';
import Profile from './tabs/Profile';
import Add from './tabs/Add';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen(){
  return(
    <Tab.Navigator 
      screenOptions={{
          headerShown: false, 
          tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 10,
          right: 10,
          shadowColor: 'black',
          shadowOffset: {width: 1, height: 1},
          shadowRadius: 3,
          shadowOpacity: 0.4,
          elevation: 3,
          borderRadius: 15,
          paddingVertical: 10,
          height: 70,
        },
        tabBarShowLabel: false,
        
        }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({focused}) => {
          return(
            <View>
              {focused? 
                <Image source={require('./assets/icons/home_bold.png')} style={styles.focusedIcons}/> : 
                <Image source={require('./assets/icons/home.png')} style={styles.icons}/>
              }
            </View>
          )
        }
      }}/>
      <Tab.Screen name='SetReminders' component={SetReminders} options={{
        tabBarIcon: ({focused}) => {
          return(
            <View>
              {focused? 
                <Image source={require('./assets/icons/report_bold.png')} style={styles.focusedIcons}/> : 
                <Image source={require('./assets/icons/report.png')} style={styles.icons}/>
              }
            </View>
          )
        }
      }}/>
      <Tab.Screen name='Add' component={Add} options={{
        tabBarIcon: () => {
          return(
            <View style={styles.addView}>
              <Image source={require('./assets/icons/plus.png')} style={styles.addIcon}/>
            </View>
          )
        }
      }}/>
      <Tab.Screen name='Reminder' component={Reminders} options={{
        tabBarIcon: ({focused}) => {
          return(
            <View>
              {focused? 
                <Image source={require('./assets/icons/calendar_bold.png')} style={styles.focusedIcons}/> : 
                <Image source={require('./assets/icons/calendar.png')} style={styles.icons}/>
              }
            </View>
          )
        }
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({focused}) => {
          return(
            <View>
              {focused? 
                <Image source={require('./assets/icons/user_bold.png')} style={styles.focusedIcons}/> : 
                <Image source={require('./assets/icons/user.png')} style={styles.icons}/>
              }
            </View>
          )
        }
      }}/>      
    </Tab.Navigator>
  );
};

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
        <Stack.Screen name='Tabs' component={TabScreen} options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>
  )
};



function ScreenToLoad(){
  const token = useSelector((state) => state.auth.token);
  // if(token === null){
  //   return (
  //     <NavigationContainer>
  //       <Auth/>
  //     </NavigationContainer>
  //   )
  // }else{
    return (
      <NavigationContainer>
        <Authenticated/>
      </NavigationContainer>
    )
  }
// }

export default function App() {
  return (
    <Provider store={store}>
      <ScreenToLoad/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 25,
    height: 25,
    tintColor: myColor.gray,
  },
  focusedIcons: {
    width: 25,
    height: 25,
    tintColor: myColor.green,
  },
  addView: {
    position: 'absolute',
    top: -45,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: myColor.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 5},
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },
  addIcon: {
    width: 50,
    height: 50,
    tintColor: myColor.green,
  }
})
