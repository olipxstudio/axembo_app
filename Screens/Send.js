import React,{useState} from "react"
import {  Image, Text, View,ScrollView} from "react-native"
import styles from "./SendStyles";
import { Avatar } from 'react-native-paper';


export default function Send() {
    const [data, setData]=useState([
        {id:1, name:"OKe Blessing", msg:"34hf6THK7mjKS91n", date:"12 Dec. 2022", dataSize:"127 MB",check:true},
        {id:2, name:"OKe Blessing", msg:"34hf6THK7mjKS91n", date:"12 Dec. 2022", dataSize:"127 MB",check:false},
        {id:3, name:"OKe Blessing", msg:"34hf6THK7mjKS91n", date:"12 Dec. 2022", dataSize:"127 MB",check:true},
        
    ])
  return (
    <View style={styles.mainContainer}>
        <View style={styles.firstView}>
            <Image
            style={styles.AxemboLogo}
            source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/krpel63j4iq-3%3A533?alt=media&token=2e70bf6e-e6d6-4c9a-ad7f-72f9c037d984",
            }}
            />
            <Text style={styles.proText}>dossier</Text>
        </View>
        <View style={styles.sendView}>
            <Avatar.Image size={50} 
            source={{ uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5tap50zhxex-1%3A81?alt=media&token=5f7a234b-1569-4dfb-beca-29706edcbef6",}}
            style={styles.sendImage}/>
            <Text style={styles.sendText}>Send anything to anyone</Text>
        </View>
        <View style={styles.HistoryHeadingView}>
            <Text style={styles.HistoryHeadingText}>Transfer History</Text>
        </View>

        {/* Transfer History Card: */}

        <ScrollView style={styles.scrollView}>
        {data.map((list,index)=>{
            return(
                <View style={styles.cardView} key={list.id}>
                    <View style={styles.toView}>
                        <Text style={styles.toText}>To: {list.name}</Text>
                        <Image
                        style={styles.folderImage}
                        source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5tap50zhxex-1%3A100?alt=media&token=339e88e6-a4fe-473a-bb43-58d21ad7d489",
                        }}
                    />
                    </View>
                    <View style={styles.toView}>
                        <Text style={styles.text}>{list.msg}</Text>
                    </View>
                    <View style={styles.toView}>
                        <Text style={styles.text}>{list.date} - {list.dataSize}</Text>
                        {list.check?
                        <Image
                            style={styles.checkImage}
                            source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5tap50zhxex-1%3A111?alt=media&token=facfa23f-7478-4873-b3dc-e2a6c638b226",
                            }}
                        />:null}
                    </View>
                 </View>
            )
        })}
        </ScrollView>
    </View>
  )}