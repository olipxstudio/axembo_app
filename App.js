import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Screens/Profile';
import Send from './Screens/Send'
import Boards from './Screens/Boards';


export default function App() {
  return (
    // <View  style={{justifyContent:'center', alignItems:'center',flex:1}}>
    //   <Text>Hello</Text>
    // </View>

     
    // <Profile/>
    // <Send/>
    <Boards/>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Welcome To Axembo</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     fontSize:40,
//     color:'purple',
//     fontWeight:'bold'
//   }
// });
