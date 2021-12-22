import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button,FlatList,ActivityIndicator, StyleSheet,ScrollView,TextInput, TouchableOpacity, View,ImageBackground ,Text,} from 'react-native';

const DATA = [
  {
    id: '5',
    title: 'First Item',
  },
  {
    id: '1',
    title: 'Second Item',
  },
  {
    id: '2',
    title: 'Third Item',
  },
  
];

export default function App() {

  let [Name,setName] = useState()
  return (
    <View style={styles.container}>
      {/* <View style={{ flex: 2 }}>
        <Text>Header</Text></View>
      <View style={{ flex: 6}}>
        <View style={styles.boxes}>
          <View style={styles.txt}>
            <Text style={{color:'white'}}>Hello</Text>
          </View>
          <View style={styles.txt}>
            <Text style={{color:'white'}}>Hello</Text>
          </View>
          <View style={styles.txt}>
            <Text style={{color:'white'}}>Hello</Text>
          </View>
          <View style={styles.txt}>
            <Text style={{color:'white'}}>Hello</Text>
          </View>
          <View style={styles.txt}>
            <Text style={{color:'white'}}>Hello</Text>
          </View>
          <View style={styles.txt}>
            <Text style={{color:'white'}}>Hello</Text>
          </View>
        </View> 
        </View>
      <View style={{ flex: 2 }}>
        <Text>Footer</Text>
      </View> */}
      {/* <TextInput 
      onChangeText={(e)=>console.log(e)}
      style={styles.inp}
      keyboardType= {"number-pad"}
      secureTextEntry={true}
      /> */}
      {/* <Button title={"Click me"} style={{width:0}} onPress={()=>alert("DATA")}></Button>
      <TouchableOpacity activeOpacity={0.2} style={{backgroundColor:"red",width:100}} onPress={()=>alert("kksksk")}>
        <Text style={{color:'white',fontSize:40}}>Click me</Text>
      </TouchableOpacity> */}
      {/* <ImageBackground style={{width:300,height:100+"%"}} source={require("./assets/hd.jfif")}>
        <Text>Hello</Text>
        </ImageBackground> */}
      

        {/* {[1,2,3,4,5,6,7,8,9,10].map((v,i)=>{
         return(
          <View  style={{shadowColor: "grey",
          backgroundColor:"red",
          marginTop:100,
          width:200,
          height:300,
          shadowOffset: {
            width: 100,
            height: 200,
          },
          shadowOpacity: 0.27,
          shadowRadius: 15.19,
          
          elevation: 23,}}>
            <Text>
              hello
            </Text>
            </View>
         )
         
        })} */}
          {/* <FlatList
        data={DATA}
        renderItem={(data)=>{
          return(
            <TouchableOpacity onPress={()=>alert(data.item.id)}>
            <View  style={{shadowColor: "grey",
            backgroundColor:"red",
            marginTop:100,
            width:200,
            height:300,
            shadowOffset: {
              width: 100,
              height: 200,
            },
            shadowOpacity: 0.27,
            shadowRadius: 15.19,
            
            elevation: 23,}}>
              <Text style={{color:"white",fontSize:30}}>
               {data.item.title}

              </Text>
              </View>
              </TouchableOpacity>
          )
        }}
        
        keyExtractor={item => item.id}
      /> */}

      {Name== undefined  ? 
        <ActivityIndicator size="large" color="#00ff00" />
      
      :  
      <h1>{Name}</h1>
    }


       <TouchableOpacity onPress={()=>setName("jdjjd")} >
         <View>
           <Text>Click me</Text>
         </View>
       </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#fff',
   
   
  },
  boxes:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between"

    
  

  },
  txt: {
    width:100,
    height:100,
    backgroundColor:"red"
  },
  inp:{
    backgroundColor:"white",
    borderWidth:3 ,
    borderColor:"red",
    borderStyle: "solid"
  }
});
