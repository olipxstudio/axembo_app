import React from "react"
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../assets/colors/Colors";
import Line from "./Line";


const Add = () =>{
    return (
        // <View style={styles.cardView}>
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.firstView}>
                    <Icon name="link" size={20} style={styles.icon}/>
                    <Text style={styles.text}>Link</Text>
                </TouchableOpacity>
                <Line/>

                <TouchableOpacity style={styles.firstView}>
                    <Icon name="video" size={20} style={styles.icon}/>
                    <Text style={styles.text}>Camera</Text>
                </TouchableOpacity>
                <Line/>

                <TouchableOpacity style={styles.firstView}>
                    <Icon name="file-alt" size={20} style={styles.icon}/>
                    <Text style={styles.text}>Note</Text>
                </TouchableOpacity>
                <Line/>

                <TouchableOpacity style={styles.firstView}>
                    <Icon name="image" size={20} style={styles.icon}/>
                    <Text style={styles.text}>Photo or Video</Text>
                </TouchableOpacity>
                <Line/>

                <TouchableOpacity style={styles.firstView}>
                    <Icon name="square" size={20} style={styles.icon}/>
                    <Text style={styles.text}>New Board</Text>
                </TouchableOpacity>
                
            
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
        width:180,
        height:300,
        borderRadius:24,
        backgroundColor:'white',
        alignItems:'center',
    //    position:'absolute',
    //    top:100,
    //    left:100,
    //    borderWidth:1
    },
    firstView:{
        width:"100%",
        height:60,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // paddingHorizontal:20
    },
    
    text:{
        fontWeight:'500',
        fontSize:14,
        position:'absolute',
        left:60
       
    },
    icon:{
        color:"grey",
        position:'absolute',
        left:20
    }
})
export default Add;