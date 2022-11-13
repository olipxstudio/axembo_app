import React,{useState} from "react"
import {Text, View, StyleSheet,TextInput, Switch, TouchableOpacity,Button} from "react-native"
import colors from "../assets/colors/Colors"


const NewBoard = () =>{
    const [isPublic,setIsPublic]=useState(false);
    const [isVisible,setIsVisible]=useState(false);
    
    return (
        
            <View style={styles.mainView}>
            <TextInput
                style={styles.NameInput}
                placeholder="Name this Board"
                placeholderTextColor={colors.lightGrey}
                maxLength={30}
                
            />
             <TextInput
                style={styles.DescriptionInput}
                placeholder="Add Description"
                placeholderTextColor={colors.lightGrey}
                
            />
            <View style={styles.subView}>
                <Text style={styles.text}>Board Type</Text>
                <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.subText}>Public</Text>
                    <Switch
                        trackColor={{false:"grey",true:colors.lightBlue}}
                        onValueChange={()=>setIsPublic(!isPublic)}
                        value={isPublic}
                        thumbColor={'white'}
                    />
                </View>  
            </View>

            <View style={styles.subView}>
                <Text style={styles.text}>People invited can:</Text>
                <View style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.subText}>View</Text>
                    <Switch
                        trackColor={{false:"grey",true:colors.lightBlue}}
                        onValueChange={()=>setIsVisible(!isVisible)}
                        value={isVisible}
                        thumbColor={'white'}
                    />
                    <TouchableOpacity style={{paddingLeft:5}}>
                         <Text style={styles.subText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save New Board</Text>
                </TouchableOpacity>
            </View>
        
        
    )
}

const styles=StyleSheet.create({
    
    mainView:{
        width:310,
        height:270,
        borderRadius:24,
        backgroundColor:"white",
        position:'absolute',
        bottom:30,
        left:30,
        // borderWidth:1,
        padding:15,
        shadowColor:"rgba(0,0,0,0.7)",
        shadowOffset:1,
        shadowRadius:20,
        shadowOpacity:0.7,
        elevation:9
    },
    subView:{
        width:'100%',
        height:40,
        display:'flex',
        flexDirection:'row',
        // borderRadius:20,
        alignItems:'center',
       paddingTop:10,
       justifyContent:'space-between',
       alignItems:'center'
    },
    
    text:{
        fontSize:14,
        fontWeight:'500',
        color:'grey'
    },
    NameInput:{
        height:40,
        width:'100%',
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'600',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:colors.lightGrey,
        color:"grey",
    },
    DescriptionInput:{
        height:40,
        width:'100%',
        backgroundColor:'white',
        fontSize:11,
        fontWeight:'600',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:colors.lightGrey,
        color:"grey",
    },
    subText:{
        fontSize:10,
        fontWeight:'500',
        color:"grey"
    },
    button:{
        width:"100%",
        height:50,
        borderRadius:40,
        backgroundColor:colors.lightBlue,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    buttonText:{
        fontSize:16,
        fontWeight:'700',
        textAlign:'center',
        color:'white',
        alignSelf:'center'
    }
   
})
export default NewBoard;