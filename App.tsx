import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AllCourse from './screens/AllCourse';
import ManageCourse from './screens/ManageCourse';
import RecentCourse from './screens/RecentCourse';

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
function MyTabs() {

  return (
    <tab.Navigator screenOptions={({ navigation }) => ({ headerStyle: { backgroundColor: 'pink' }, headerTintColor: 'white', tabBarStyle: { backgroundColor: 'pink' }, tabBarActiveTintColor: 'darkblue', headerRight: () => (<Pressable onPress={(() => navigation.navigate('ManageCourse'))}><View><AntDesign name='setting' size={24} color='white' style={{ marginRight: 10 }} /></View></Pressable>) })}>
      <tab.Screen name="AllCourse" component={AllCourse} options={{ title: 'Tüm Kurslar', tabBarIcon: ({ color, size }) => (<Entypo name='list' color={color} size={size} />) }} />
      <tab.Screen name="RecentCourse" component={RecentCourse} options={{ title: 'Yakın Zamanda', tabBarIcon: ({ color, size }) => (<AntDesign name='hourglass' color={color} size={size} />) }} />
    </tab.Navigator>
  );


}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AllCourse" component={AllCourse} />
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
        <Stack.Screen name="RecentCourse" component={RecentCourse} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

