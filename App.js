import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TabNAVIGATION from './src/config/TabNav'
import { StyleSheet, Text, View } from 'react-native';
import NavigationDat from './src/config/navigation.js';
// import New from './src/config/index'
export default function App() {
  return (
   
<>
    <NavigationDat/>
    <TabNAVIGATION />
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
});
