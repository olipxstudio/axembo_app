import React from "react"
import {Text, View, StyleSheet} from "react-native"
import colors from "../assets/colors/Colors"


const Board = ({text}) =>{
    return (
        
            <View style={styles.mainView}>
            <View style={styles.firstView}>

            </View>
            <View style={styles.secondView}>
                <Text style={styles.text}>{text}</Text>
            </View>
            </View>
        
        
    )
}

const styles=StyleSheet.create({
    
    mainView:{
        width:"46%",
        height:200,
        borderRadius:20,
        backgroundColor:"white",
        margin:5
    },
    firstView:{
        width:"100%",
        height:"100%",
        borderRadius:20,
    },
    secondView:{
        height:'10%',
        position:'absolute',
        left:10,
        bottom:5
       
        
    },
    text:{
        fontSize:10,
        fontWeight:'500',
        lineHeight:19,
        backgroundColor:colors.lightGrey,
        width:38,
        borderRadius:10,
        textAlign:'center'
    }
   
})
export default Board;