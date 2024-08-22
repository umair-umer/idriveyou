import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch } from 'react-native'

import Images from '../../../utils/im';
import { calculateFontSize } from '../../../utils/font';
import Custombutton from '../../../components/cutomButton';
const { width, height } = Dimensions.get("window")
function InappNavigationscreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>
            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>In-app navigation</Text>

                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>Turn-by-turn instructions and route</Text>
                    <Text style={styles.txtslogan}>planning right in the I will drive you app.</Text>
                </View>


                <View style={styles.arrowBox}>
                    <Image
                        source={Images.Complete}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode='center'
                    />
                </View>
            </View>

            <View style={styles.txtbtn}>
                <Text style={styles.txtslogan}>Enable</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Custombutton text={'ok'} onPress={() => navigation.navigate('profilecreate')} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#0288FF",
        alignItems: "center",
        padding: 10

    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        // backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.095


    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.08,
        // backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    txt: {

        fontSize: calculateFontSize(30),
        textAlign: "center",
        fontWeight: "700",
        color: "#fff"
    },

    txtslogan: {
        fontSize: calculateFontSize(18),
        textAlign: "center",
        fontWeight: "500",
        color: "#fff",

    },
    arrowBox: {

        width: width * 0.8,
        height: height * 0.4,
        //  backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center"
    },
    txtbtn: {

        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.9

    },
    button: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    toggled: {
        backgroundColor: '#4caf50',
    },
    untoggled: {
        backgroundColor: '#f44336',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },


})


export default InappNavigationscreen