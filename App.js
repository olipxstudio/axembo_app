import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, Dimensions, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './components/Colors';
import { NavigationContainer } from '@react-navigation/native';

const {width} = Dimensions.get('window')

export default function App() {
    const [loginVis, setloginVis] = useState(false)
    const [processing, setProcessing] = useState(false)
    
    return (
        <NavigationContainer>
            <View  style={{justifyContent:'center', alignItems:'center',flex:1}}>
                <Text>Intro Page</Text>
                <Pressable style={styles.qr_code_icon_hd} onPress={() => setloginVis(true)}>
                    <Text>Open Login</Text>
                </Pressable>
                
                <Modal
                animationType="slide"
                transparent={true}
                visible={loginVis}
                onRequestClose={() => {
                    setloginVis(!loginVis);
                }}
                >
                    <View style={styles.qrModalView}>
                        <View style={styles.qrModalCenterView}>
                            <View style={styles.qr_code_top}>
                                <Text style={styles.logingTitle}>Sign Up</Text>
                                <Pressable style={styles.qr_code_icon_hd} onPress={() => setloginVis(false)}>
                                    <Ionicons name="close-outline" size={24} color={Colors.black} style={styles.qr_code_icon} />
                                </Pressable>
                            </View>
                            <View style={styles.qr_code_hd}>
                                <View style={styles.input_holder}>
                                    <Ionicons name="person" size={18} color={Colors.grayEleven} style={styles.input_icon} />
                                    <TextInput placeholder='First Name' placeholderTextColor={Colors.grayEleven} style={styles.input} />
                                </View>
                                <View style={styles.input_holder}>
                                    <Ionicons name="person-add" size={18} color={Colors.grayEleven} style={styles.input_icon} />
                                    <TextInput placeholder='Sur Name (optional)' placeholderTextColor={Colors.grayEleven} style={styles.input} />
                                </View>
                                <View style={styles.input_holder}>
                                    <Ionicons name="md-mail" size={18} color={Colors.grayEleven} style={styles.input_icon} />
                                    <TextInput placeholder='Email' placeholderTextColor={Colors.grayEleven} style={styles.input} />
                                </View>
                                <View style={styles.input_holder}>
                                    <Ionicons name="lock-closed" size={18} color={Colors.grayEleven} style={styles.input_icon} />
                                    <TextInput secureTextEntry={true} placeholder='Password' placeholderTextColor={Colors.grayEleven} style={styles.input} />
                                </View>
                                <View style={styles.input_holder}>
                                    <TouchableOpacity style={styles.loginBtn} onPress={()=>setProcessing(!processing)}>
                                        <Text style={styles.loginBtnText}>Continue</Text>
                                        <View>
                                            {
                                                processing ?
                                                <ActivityIndicator size="small" color={Colors.white} style={styles.loginBtnIcons} />
                                                :
                                                <Ionicons name="chevron-forward" size={18} color={Colors.white} style={styles.loginBtnIcons} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    qrModalView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#00000099'
    },
    qrModalCenterView: {
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 10,
        padding: 25,
    },
    qr_code_top: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 5,
    },
    qr_code_icon_hd: {
        width: 24,
        height: 24
    },
    qr_code_icon: {
        width: 25,
        height: 25,
    },
    qr_code_hd: {
        width: '100%',
        marginTop: 50
    },
    
    logingTitle: {
        fontSize: 24,
        fontWeight: '700'
    },
    input_holder: {
        marginBottom: 25
    },
    input_icon: {
        marginBottom: -31,
        marginLeft: 10,
        zIndex: 1,
        width: 18
    },
    input: {
        width: '100%',
        // backgroundColor: Colors.grayTwo,
        borderColor: Colors.grayEight,
        borderWidth: 1,
        height: 43,
        paddingHorizontal: 15,
        paddingLeft: 40,
        borderRadius: 12
    },
    loginBtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        borderRadius: 22
    },
    loginBtnText: {
        color: '#fff',
        fontWeight: '600'
    },
    loginBtnIcons: {
        marginLeft: 10
    }
});
