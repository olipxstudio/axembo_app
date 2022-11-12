import { StyleSheet } from "react-native";
import colors from "../assets/colors/Colors";

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: colors.bgColor,
        width:'100%',
        height:'100%',
        padding:20,
    },
    firstView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:50,
        
    },
    photosHeading:{
        fontSize:20,
        fontWeight:'700',
        lineHeight:19
    },
    privateText:{
        fontSize:10,
        fontWeight:'500',
        color:'grey',
        paddingRight:10
    },
    subHeadingView:{
        width:'100%',
        marginLeft:5
    },
    subHeading:{
        fontSize:11,
        fontWeight:'400'
    },
    boardView:{
        width:'100%',
        // height:200,
        justifyContent:'space-between',
        alignItems:'flex-start',
        margin:5,
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'row'
        
    },
    tabView:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        position:'absolute',
        bottom:10,
        left:20,
        justifyContent:'space-around',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        borderRadius:16,
        
    },
    icon:{
        // position:'absolute',
        // left:10,
    },
    buttonText:{
        fontSize:13,
        fontWeight:'500',
        backgroundColor:colors.lightGrey,
        paddingHorizontal:10,
        paddingVertical:2,
        lineHeight:19,
        borderRadius:30,
        textAlign:'center',
        // marginLeft:5
    },
    plusButton:{
        backgroundColor:colors.orange,
        borderRadius:19,
        alignSelf:'center',
        color:'white'
       
    },
    addView:{
        position:'absolute',
        bottom:80,
        right:20,
        backgroundColor:'red',
        borderRadius:24
    }
});
export default styles;   