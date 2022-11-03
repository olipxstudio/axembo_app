import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';

export default function App() {
  return (

    <Login/>
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
