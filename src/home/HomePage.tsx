import { View, Text, FlatList ,Image,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchApi } from '../api/api'
import { style } from './Style'

export default function HomePage() {
    const [dataApi, setDataApi] = useState([])
    useEffect(() => {
        fetchApi()
            .then((data: any) => {
                console.log("------------------",data)
                setDataApi(data)
            })
            .catch(err => console.log(err))
    }, [])

    const renderItem = (item:any) => {
        return <View style={style.containerItems}>
            <TouchableOpacity style={[{ marginLeft: 8 },style.bgItems]}>
                <Text style={{ fontSize: 18, color: "black",paddingLeft: 15 }}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={[style.p16,{backgroundColor:"#d7f0f7"}]}>
            <View>
                <Text style={style.title}>To Do List</Text>
            </View>
            <FlatList
                style={{ height: 'auto',width:'100%' }}
                data={dataApi}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    )
}