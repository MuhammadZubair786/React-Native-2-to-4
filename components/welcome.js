import React, { useEffect } from 'react'
import { View ,Text,StyleSheet,Image} from 'react-native'


function Welcome(props){
    console.log(props)

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate("Home")
        },6000)
    },[])

    return(
        <>
        <View style={styles.container}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H7eZ9k9Rtb_tOjtjjzL13-by8iRogZOsfw&usqp=CAU'}}
                style={{ width: 140, height: 140, resizeMode: "contain", marginTop: -80 }} />
            <Text style={styles.title}>Smit Hyderabad</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f3607b",
    },

    
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 3,
        marginTop: 10,
    },

})

export default Welcome