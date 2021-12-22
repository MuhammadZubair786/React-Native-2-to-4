import React, { useEffect, useState } from "react"
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';

  import database from '@react-native-firebase/database'

function Home(){

    let [name,setname] = useState()

    // useEffect(()=>{
        
    // },[])

    const addData=()=>{
        console.log(name)
        database().ref("/User").push({name : name})


    }
    return(
        <View>

            <TextInput style={{backgroundColor:"red",color:"white"}} value={name} onChangeText={(e)=>setname(e)}/>
            <Button title="Click" onPress={()=>addData()}></Button>
       </View>

    )
}

export default Home;