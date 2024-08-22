import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Custombutton from '../../../components/cutomButton'
import { calculateFontSize } from '../../../utils/font'
const { width, height } = Dimensions.get("window")

function UserOtpscreen({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>Enter The</Text>
                    <Text style={styles.txt}>6-Digit Code</Text>


                </View>
                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>We sent it to +00 000 0000 0000</Text>
                    <Text style={styles.txtslogan}>in WhatsApp</Text>
                </View>

                <TextInput
                    placeholder='Enter your code '
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />
                <View style={styles.inpCon}>
                    <Custombutton text={'Confirm'} onPress={() => navigation.navigate('addusername')} />
                
                    <View style={styles.btnCon}>
                    <TouchableOpacity style={styles.btnlight} >
                        <Text style={styles.txttt}>Resend code</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.txttt}>Request a call</Text>
                    </TouchableOpacity>
                </View>
                
                </View>


              

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.08


    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    txt: {

        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },
    inpCon: {

        width: width * 0.9,
        height: height * 0.4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: height * 0.25,
        padding: 10
    },
    txtslogan: {
        fontSize: calculateFontSize(16),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",

    },
    inp: {

        width: width * 0.9,
        paddingHorizontal: width * 0.08,
        height: height * 0.06,
        borderWidth: 2,
        borderColor: "#2C9BFF",
        borderRadius: 30,
        color: "#2C9BFF",
        alignSelf: "center",

    },
    btnCon: {

        flexDirection: "row",
        justifyContent: "space-between",

    },
    btn: {
        width: width * 0.4,
        height: height * 0.04,
        backgroundColor: "#CCCCCC",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginHorizontal: height * 0.01
    },
    txttt: {

        color: "#000",
        fontSize: calculateFontSize(16),
        fontWeight: "400"
    },
    btnlight: {
        width: width * 0.4,
        height: height * 0.04,
        backgroundColor: "#CCCCCC",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginHorizontal: height * 0.01

    },
    


})

export default UserOtpscreen