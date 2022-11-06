import React from "react"
import {Text, View, StyleSheet} from "react-native"


const Card = ({text}) =>{
    return (
        // <View style={styles.cardView}>
            <View style={styles.mainView}>
            <View style={styles.firstView}>

            </View>
            <View style={styles.secondView}>
                <Text style={styles.text}>{text}</Text>
            </View>
            </View>
        // {/* </View> */}
        
    )
}

const styles=StyleSheet.create({
    // cardView:{
    //     height:'100%',
    //     width:'100%'
    // },
    mainView:{
        width:100,
        height:150,
        borderRadius:16,
    },
    firstView:{
        width:100,
        height:100,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        backgroundColor:'#D9D9D9'
    },
    secondView:{
        width:100,
        height:50,
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16,
        backgroundColor:'#fff',
    },
    text:{
        fontWeight:'500',
        fontSize:13,
        width:'100%',
        margin:3
    }
})
export default Card;