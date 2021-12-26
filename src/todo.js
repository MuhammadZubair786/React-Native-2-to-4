import {
    Button,
    StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View
} from 'react-native';
import React, { useState } from 'react';

function Todo() {

    let [val, setval] = useState()
    let [todo, settodo] = useState(
        // ["Sir asad", "Sir Shoaib"]
        [
            {
                name: "Sir asad",
                status: true

            },
            {
                name: "Sir Umair",
                status: true

            }
        ]
    )


    const addTodo = () => {
        console.log(val)
        settodo([...todo, {
            name : val,status: true
        }])
        setval('')

    }

    const editTodo = (i) => {
        console.log(i)
        for(var j=0;j<todo.length;j++){
            todo[j].status = true
        }

        todo[i].status = false
        console.log(todo)
        settodo([...todo])


    }

    const datachange=(valueget,ind)=>{
        todo[ind].name = valueget
        settodo([...todo])

    }

    const update =(i)=>{
        todo[i].status = true
        // console.log(todo)
        settodo([...todo])

    }



    return (
        <View>
            <Text style={{ fontSize: 30, color: "red", textAlign: "center" }}>Todo</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput placeholder='Enter Todo ' value={val} onChangeText={(e) => setval(e)} style={{ backgroundColor: "lightblue", width: 70 + "%", margin: 15 }} />
                <TouchableOpacity style={{ backgroundColor: 'grey', width: 20 + "%", height: 50, marginTop: 15, color: 'red' }}>
                    <Text style={{ color: 'red', padding: 2, paddingTop: 10 }} onPress={() => addTodo()}>Add   todo</Text>
                </TouchableOpacity>
                {/* <Button title='Add Todo' style={{backgroundColor:'red'}}></Button> */}
            </View>

            {todo.map((v, i) => {
                return (
                    <View style={{ flexDirection: 'row', margin: 10 }} key={i}>
                        {v.status ?
                            <>
                                <Text >{v.name}</Text>
                                <TouchableOpacity style={{ backgroundColor: 'green', width: 20 + "%", height: 30, color: 'red', marginLeft: 30 }}>
                                    <Text style={{ color: 'white', padding: 2, paddingTop: 10 }} onPress={() => editTodo(i)}>Edit todo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'grey', width: 20 + "%", height: 30, color: 'red', marginLeft: 30 }}>
                                    <Text style={{ color: 'white', padding: 2, paddingTop: 10 }} onPress={() => addTodo()}>Delete  todo</Text>
                                </TouchableOpacity>
                            </>

                            :
                            <View style={{ flexDirection: 'row', }}>
                                 <TextInput placeholder='Enter Todo ' value={v.name} onChangeText={(e) => datachange(e,i)} style={{ backgroundColor: "lightblue", width: 70 + "%", margin: 15 }} />
                <TouchableOpacity style={{ backgroundColor: 'grey', width: 20 + "%", height: 50, marginTop: 15, color: 'red' }}>
                    <Text style={{ color: 'red', padding: 2, paddingTop: 10 }} onPress={() => update(i)}>Update</Text>
                </TouchableOpacity>
                </View>
                           
                        }

                    </View>
                )
            })}
        </View>
    )
}

export default Todo