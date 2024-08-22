import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const { width, height } = Dimensions.get("window")
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { calculateFontSize } from '../../../utils/font'
import Entypo from 'react-native-vector-icons/Entypo';

function Settingscreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.profileconainter}>
                <TouchableOpacity
                    // style={styles.profileconainter}
                    onPress={() => navigation.goBack()}
                >
                    <Entypo name="menu" size={30} color={"#fff"} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainCon}>
                <TouchableOpacity style={styles.whiteCon} onPress={() => navigation.navigate("monthlyicom")}>
                    <Text style={styles.txtslogan}>Phone number</Text>
                    <Text style={styles.txtslogan}>xxxxx - xxxx</Text>

                </TouchableOpacity>
                <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={styles.txtslogan}>Do not look the screen</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "column", justifyContent: "space-between" }}>

                        <Text style={styles.txtslogan}>Languages</Text>
                        <Text style={styles.txtslogan}>default Languages</Text>

                    </TouchableOpacity>
                </View> */}

                <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={styles.txtslogan}>Date and distance</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={styles.txtslogan}>Night Mode</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={styles.txtslogan}>Rules and terms</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={styles.txtslogan}>Logout</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteCon}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={{ color: "red", fontSize: calculateFontSize(18) }}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        padding: 20

    },
    profileconainter: {
        position: "absolute",
        backgroundColor: "#2C9BFF",
        width: width * 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.01,
        // top: 20,
        zIndex: 9999,
        alignSelf: "center",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        marginVertical: height * 0.05



    },
    whiteCon: {
        // width: width * 0.9,
        // height: height * 0.08,
        backgroundColor: "#ccc",
        padding: 20,
        marginVertical: height * 0.01,
        borderRadius:10
    },
    txt: {

        fontSize: calculateFontSize(24),
        fontWeight: "700",
        color: "#000"
    },

    txtslogan: {
        fontSize: calculateFontSize(18),
        fontWeight: "500",
        color: "#000",

    }

})

export default Settingscreen