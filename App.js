
import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';

export default function App() {

  const stylesss = StyleSheet.create({
    main: {
      // backgroundColor:"yellow",

      flex: 20,
      // flexDirection:'row'
    },
    // h1 :{
    //  backgroundColor:"blue",
    //   color:'red',
    //   flex : 20
    // },
    // b1 :{
    //   backgroundColor:"green",

    //   color:'red',
    //   flex : 10
    // },
    // f1 :{
    //   backgroundColor:"pink",

    //   color:'red',
    //   flex : 10
    // }
  })

  return (
    <ScrollView>
    <View style={stylesss.main}>
      {/* <Text style={stylesss.txt}>Hello World</Text>
     <View  style={stylesss.h1}>
     <Text style={{fontSize:40,color:'white'}}>Header</Text>
     </View>
      <View style={stylesss.b1}>
      <Text style={{fontSize:40,color:'white'}}>Body</Text>
      </View>
     <View style={stylesss.f1}>
     <Text style={{fontSize:40,color:'white'}}>Footer</Text>
     </View> */}

      {/* <Image style={{width:300,height:1000,max}} source={{uri:'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg'}} /> */}
      {/* <Image source={require('./assets/f1.jpg')} style={{width:300,height:1000}}/> */}

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v, i) => {
        return (
          <View>
            <Text style={{fontSize:100}}>
              {v}
            </Text>
          </View>
        )
      })}


    </View>
    </ScrollView>


  );
}


