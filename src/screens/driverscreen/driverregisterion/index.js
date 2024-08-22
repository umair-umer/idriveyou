
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const { width, height } = Dimensions.get("window")

import { calculateFontSize } from '../../../utils/font'
import Images from '../../../utils/im'

function Drivinglicensescreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.box}>
                    <Text style={styles.txt}>Driver's license details</Text>
                </View>

                <View style={styles.inpCon}>
                    <TextInput
                        placeholder='Issuing country'
                        placeholderTextColor={"#CCCCCC"}
                        style={styles.inp}
                    />

                  

                    <TextInput
                        placeholder='Drivers license number '
                        placeholderTextColor={"#CCCCCC"}
                        style={styles.inp}
                    />

                    <TextInput
                        placeholder='Issue date'
                        placeholderTextColor={"#CCCCCC"}
                        style={styles.inp}
                    />

                    <TextInput
                        placeholder='Expiry date'
                        placeholderTextColor={"#CCCCCC"}
                        style={styles.inp}
                    />
                </View>

                <View style={styles.imgbox}>
                    <View style={styles.imgPiker}>
                        <View style={styles.img}>
                            <Image
                               source={Images.pic}
                                style={{ width: "100%", height: "100%" }}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={{color:"#000"}}>Driver's license: Front</Text>
                    </View>
                    <View style={styles.imgPiker}>
                        <View style={styles.img}>
                            <Image
                                source={Images.pic}
                                style={{ width: "100%", height: "100%" }}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={{color:"#000"}}>Driver's license: Back</Text>

                    </View>

                    <View style={styles.imgPiker}>
                        <View style={styles.img}>
                            <Image
                               source={Images.pic}
                                style={{ width: "100%", height: "100%" }}
                                resizeMode='center'
                            />
                        </View>
                        <Text style={{color:"#000"}}>Selfie with driver's license</Text>
                    </View>
                </View>


                <View style={styles.btnCon}>
                    <TouchableOpacity style={styles.btnlight} onPress={() => navigation.navigate("selectcityscreen")}>

                        <Text style={styles.txttt}>Back</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("expscreen")}>

                        <Text style={styles.txttt}>Next</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    txt: {

        fontSize: calculateFontSize(20),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",
    },

    inpCon: {
        marginVertical: height * 0.04
    },

    inp: {

        width: width * 0.9,
        paddingHorizontal: width * 0.08,
        height: height * 0.06,
        borderWidth: 2,
        borderColor: "#2C9BFF",
        borderRadius: 30,
        marginVertical: height * 0.014,
        color: "#2C9BFF",
        alignSelf: "center",
        // marginVertical: height * 0.03
    },
    imgbox: {

        width: width * 0.9,
        height: height * 0.4,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.02,
        flexWrap: "wrap"

    },
    imgPiker: {

        width: width * 0.38,
        height: height * 0.16,
        borderWidth: 2,
        borderColor: "#2C9BFF",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 20

    },
    img: {

        width: width * 0.18,
        height: height * 0.06,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    btnCon: {

        flexDirection: "row",
        justifyContent:"space-around"
    },
    btn: {
        width: width * 0.4,
        height: height * 0.06,
        backgroundColor: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.03
    },
    txttt: {

        color: "#fff",
        fontSize: calculateFontSize(16),
        fontWeight: "500"
    },
    btnlight:{
        width: width * 0.4,
        height: height * 0.06,
        backgroundColor: "#CCCCCC",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.03

    }

})
export default Drivinglicensescreen
