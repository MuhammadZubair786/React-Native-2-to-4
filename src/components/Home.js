import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


function Home({navigation }){
    
    return(
        <View style={styles.container}>
        <Text>Smit Hyderabad</Text>
        <Button title="GO TO About" onPress={()=>navigation.navigate("About"
      
        
        )} ></Button>
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
export default Home;