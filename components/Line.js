import React from "react"
import { View} from "react-native"
import colors from "../assets/colors/Colors";


const Line = () =>{
    return (
        <View
        style={{
            width:"80%",
            height:1,
            backgroundColor:colors.lightGrey
        }}
        ></View>
        
    )
}

export default Line;