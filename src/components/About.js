import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


function About({ navigation }){

    return(
        <View style={styles.container}>
        <Text>About</Text>
        <Button title="Go tO Contact" onPress={()=>navigation.navigate("Contact")}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default About;