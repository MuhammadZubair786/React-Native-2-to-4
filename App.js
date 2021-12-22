import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './components/Camera'
import Gallery from './components/Gallery'
import Location from './components/Location'
export default function App() {
  return (
  //  <Camera/>
  // <Gallery/>
  <Location/>
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
