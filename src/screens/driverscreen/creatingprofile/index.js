import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../../utils/font'
import Custombutton from '../../../components/cutomButton'
const { width, height } = Dimensions.get("window")
function CreatingProfile({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>We are creating
                        your profile</Text>

                </View>


                <View style={styles.arrowBox}>
                    <Text style={styles.txtslogan}>This will take a few minutes, then all
                        you have to do is complete the
                        document check and enter your vehicle
                        information.
                    </Text>
                    <Text style={styles.txtslogan}>Now the GO Online button will be
                        available on the home screen. Tap it
                        and wait for your first orders.</Text>
                </View>
            </View>



            <Custombutton text={'ok'} onPress={()=>navigation.navigate("btab")}/>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 10

    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        alignItems: "center",
        marginVertical: height * 0.095


    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.095,
        // backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",

    },
    txt: {

        fontSize: calculateFontSize(30),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },

    txtslogan: {
        fontSize: calculateFontSize(16),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",
        margin:10

    },
    arrowBox: {

        width: width * 0.8,
        height: height * 0.4,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:height*0.04
    },


})

export default CreatingProfile