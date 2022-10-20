import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, Pressable } from 'react-native';
import CustomeBtn from './src/components/CustomeBtn';
import Header from './src/components/Header';
import React from 'react';
import Notifications from './src/components/notifications';
import Settings from './src/components/settings';
import AccountSettings from './src/components/AccountSettings';


export default function App() {
  const {width} = useWindowDimensions();
  const [isViewed,setIsViewed] = React.useState(false)
  return (
    
    <>
    <Notifications/>
    <Settings/>
    <AccountSettings/>
    </>

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  cameraContainer: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: 20
  
  }
});
