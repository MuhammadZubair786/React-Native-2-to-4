import React,{useState} from "react"
import {Button, Text,TextInput,Touchable,TouchableOpacity,View, } from 'react-native';
import Camera from './Camera'
function Home({navigation}){
    return(
      
        <View style={{flex:1,justifyContent:"center"}}>
           
            <View> 
      

            <Text style={{textAlign:"center",fontSize:30}}>Home</Text>
            <Button title="Move To Camera" 
            onPress={() => navigation.navigate('Camera')}
            ></Button>
             </View>
         
       
        {/* <TextInput style={{backgroundColor:"red"}} keyboardType="numeric"/> */}
       
        </View>
    )
}

export default Home