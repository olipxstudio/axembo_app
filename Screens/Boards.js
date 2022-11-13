import React,{useState} from "react"
import {  Image, Text, View,FlatList, TouchableOpacity} from "react-native"
import styles from "./BoardsStyles";
import { Avatar } from 'react-native-paper';
import Board from "../components/Board";
import Icon from "react-native-vector-icons/Ionicons";
import Add from "../components/Add";
import NewBoard from "../components/NewBoard";



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
             <View style={styles.tabView}>
                <Icon name="search" size={15} style={styles.icon} color='grey'/>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Jame's Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    return(
                        <View style={styles.addView}> 
                            <Add/>
                        </View>
                    );
                }}>
                    <Icon name="add" size={25} style={styles.plusButton}/>
                </TouchableOpacity>
                
             </View>
           
             
        </View>
    );
}