import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
    flex:1,
   
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(244,244,244,1)",
    width: "100%",
    height:"100%",
    padding:20,
  },
  emptyView: {
    flex:1,
    width:'100%', 
  },
  
  container: {
    display: "flex",
    flex:3,
    justifyContent:'center',
    alignItems: "center",
    
  },
  AxemboLogo: {
    width: 100,
    height: 23.5,
    marginBottom: 20,
  },
  detailsView:{
    width: 334,
    marginBottom: 84,
  },
  details: {
    fontSize: 14,
    // fontFamily: "Oswald-Light",
    fontWeight: "400",
    lineHeight: 17,
    color: "rgba(47,47,47,1)",
    marginTop:5
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    // marginHorizontal:10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    // marginRight:10,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: "rgba(230,230,230,1)",
    alignItems:'center',
    width:'90%',
    justifyContent:"flex-start"
  },
  Person: {
    width: 18,
    height: 18,
    marginRight: 11,
    alignSelf:'center'
  },
  textInput: {
    width:"100%",
    fontSize: 16,
    // // fontFamily: "Inter-Black",
    fontWeight: "400",
    // lineHeight: 14,
    color: "rgba(0,0,0,1)",
  },

  Rectangle1: {
    backgroundColor: "rgba(0,0,0,1)",
    width: 130,
    height: 5,
    borderRadius: 9,
    marginTop:100
  },
})
export default styles;