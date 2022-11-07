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
        width:90,
        height:20,
    },
    proText:{
        fontSize:14,
        color:'white',
        fontWeight:'600',
        backgroundColor:colors.lightBlue,
        height:20,
        width:50,
        textAlign:'center',
        // borderWidth:1,
        borderRadius:9,
    },
    secondView:{
        width:'100%',
        justifyContent:'center',
        height:200,
        alignItems:'center',
        // backgroundColor:'red'
    },
    olipxText:{
        width: 95,
        height: 19,
        fontSize:16,
        fontWeight:'700',
        lineHeight:19,
        marginTop:10
    },
    emailText:{
        fontWeight:'400',
        color:' grey'
    },
    emailTextView:{
        display: "flex",
        flexDirection:'row',
        width:'100%',
        height:40,
        justifyContent:'center',
        paddingLeft:10
       
    },
    ChevronForward: {
        width: 18,
        height: 18,
        marginTop:-10,
        marginLeft:5
      },
      getStartedView:{
        width:'100%',
        height:20,
      },
      getStartedText:{
        fontSize:14,
        fontWeight:'700',
        color:'black',


      },
      cardView:{
        width:"100%",
        height:166,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginHorizontal:10
      },
      moreTextView:{
        marginTop:15
      },
      helpView:{
        width:'100%',
        marginTop:5,
        padding:10,
        paddingLeft:15,
        backgroundColor:'white',
        borderRadius:15
      },
      helpText:{
        fontSize:13,
        fontWeight:'500',
        
      },
      touchableOpacity:{
        height:30,
        width:'100%',
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:colors.lightGrey,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      versionView:{
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:10,
      },
      versionText:{
        fontSize:10,
        fontWeight:'500',
        color:'grey'
      }
})
export default styles;