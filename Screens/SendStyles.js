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
        width:"100%",
        height:100,
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    AxemboLogo:{
        width:85,
        height:20,
    },
    proText:{
        fontSize:12,
        color:'white',
        fontWeight:'600',
        backgroundColor:colors.lightBlue,
        height:20,
        width:60,
        textAlign:'center',
        // borderWidth:1,
        borderRadius:12,
    },
    sendView:{
        width:'100%',
        height:250,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'pink'
    },
    sendImage:{
        width: 90,
        height:90,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:45,
        backgroundColor:colors.lightBlue
    },
    sendText:{
        fontSize:14,
        fontWeight:'500',
        color:'black',
        marginTop:10
    },
    HistoryHeadingView:{
        width:'100%',
        height:20,
    },
    HistoryHeadingText:{
        fontSize:14,
        fontWeight:'700'
    },

    // Transfer History Card Styles:
    cardView:{
        height:85,
        width:'100%',
        borderRadius:16,
        backgroundColor:'white',
        marginTop:10
    },
    scrollView:{
        width:'100%'
    },
    toView:{
        width:'100%',
        // height:18,
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:10,
        paddingTop:5,
        justifyContent:'space-between',
        // paddingRight:20
    },
    toText:{
        fontSize:13,
        fontWeight:'500',
        color:'black'
    },
    folderImage:{
        width: 24,
        height: 24,
    },
    text:{
        fontSize:13,
        fontWeight:'500',
        color:'grey'
    },
    checkImage:{
        width: 15,
        height: 15,
        marginRight:3,
    }
})
export default styles;