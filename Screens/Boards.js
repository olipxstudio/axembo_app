import React,{useState} from "react"
import {  Image, Text, View,FlatList} from "react-native"
import styles from "./BoardsStyles";
import { Avatar } from 'react-native-paper';
import Board from "../components/Board";


export default function Boards() {

    const [data, setData]=useState([
        {id:1, name:"Photos",},
        {id:2, name:"Video",},
        {id:3, name:"Note",},
        {id:3, name:"Link",},
        
    ])
    return(
        <View style={styles.mainContainer}>
            <View style={styles.firstView}>
                <Text style={styles.photosHeading}> Photos</Text>
                <Text style={styles.privateText}> Private</Text>
            </View>
            <View style={styles.subHeadingView}>
                <Text style={styles.subHeading}>Board of my Photos</Text>
            </View>
            <View style={styles.boardView}>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return(
                        
                            <Board text={item.name}/>  
                       
                    )
                }}
                numColumns={2}
            />
             </View>

        </View>
    );
}