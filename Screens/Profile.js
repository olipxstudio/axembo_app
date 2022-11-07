import React from "react"
import {  Image, Text, View,TouchableOpacity} from "react-native"
import styles from "./ProfileStyles";
import { Avatar } from 'react-native-paper';
import Card from "../components/Card";
import colors from "../assets/colors/Colors";



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
            <Avatar.Image size={100}  style={{backgroundColor:colors.lightGrey}}/>
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
        <View style={[styles.getStartedView, styles.moreTextView]}>
             <Text style={styles.getStartedText}>More</Text>
        </View>
        <View style={styles.helpView}>
        <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.helpText}>
                Help
              </Text>
              <Image
                        style={styles.ChevronForward}
                        source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/722pubrhq2l-1%3A20?alt=media&token=e79ce507-20f2-4d5c-b8ee-1f060e732b61",
                        }}
                    />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.helpText}>
                Report an issue
              </Text>
              <Image
                        style={styles.ChevronForward}
                        source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/722pubrhq2l-1%3A20?alt=media&token=e79ce507-20f2-4d5c-b8ee-1f060e732b61",
                        }}
                    />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.helpText}>
                Give us a feedback
              </Text>
              <Image
                        style={styles.ChevronForward}
                        source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/722pubrhq2l-1%3A20?alt=media&token=e79ce507-20f2-4d5c-b8ee-1f060e732b61",
                        }}
                    />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.helpText}>
                Terms and conditions
              </Text>
              <Image
                        style={styles.ChevronForward}
                        source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/722pubrhq2l-1%3A20?alt=media&token=e79ce507-20f2-4d5c-b8ee-1f060e732b61",
                        }}
                    />
        </TouchableOpacity> 
        </View> 
        <View style={styles.versionView}>
          <Text style={styles.versionText}>Version 0.01</Text>
        </View>             

    </View>
  )
}