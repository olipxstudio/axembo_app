import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "rgba(244,244,244,1)",
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
        backgroundColor:'#4C5DF5',
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
      }
})
export default styles;