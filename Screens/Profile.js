import React from "react"
import {  Image, Text, View} from "react-native"
import styles from "./ProfileStyles";
import { Avatar } from 'react-native-paper';
import Card from "../components/Card";



export default function Profile() {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.firstView}>
        <Image
          style={styles.AxemboLogo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-3%3A533?alt=media&token=2e70bf6e-e6d6-4c9a-ad7f-72f9c037d984",
          }}
        />
        <Text style={styles.proText}>PRO</Text>
        </View>

        <View style={styles.secondView}>
            <Avatar.Image size={100}  style={{backgroundColor:'grey'}}/>
            <Text style={styles.olipxText}>Olipx Studio</Text>
            <View style={styles.emailTextView}>
      
                    <Text style={styles.emailText}>olipsphil@gmail.com</Text>
                    <Image
                        style={styles.ChevronForward}
                        source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/722pubrhq2l-1%3A20?alt=media&token=e79ce507-20f2-4d5c-b8ee-1f060e732b61",
                        }}
                    />
              
            </View>
        </View>
        <View style={styles.getStartedView}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </View>
        <View style={styles.cardView}>
            <Card text={"View Introduction"}/>
            <Card text={"How to save items from apps"}/>
            <Card text={"How to save from chrome"}/>            
        </View>

    </View>
  )
}