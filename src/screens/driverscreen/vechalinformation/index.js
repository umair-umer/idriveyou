import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../../utils/font'
const { width, height } = Dimensions.get("window")
function Vehicleinformaion({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.txt}>Vehicle informaion</Text>
            </View>

            <View style={styles.inpCon}>
                <TextInput
                    placeholder='Issuing country'
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />

                <TextInput
                    placeholder='First name '
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />
                <TextInput
                    placeholder='Make'
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />

                <TextInput
                    placeholder='Model'
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />

                <TextInput
                    placeholder='Color'
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />

                <TextInput
                    placeholder='Model year'
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />


                <TextInput
                    placeholder='License plate number'
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />
            </View>



            <View style={styles.btnCon}>
                <TouchableOpacity style={styles.btnlight} onPress={() => navigation.navigate("driverdetails")}>

                    <Text style={styles.txttt}>Back</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("appnvigation")}>

                    <Text style={styles.txttt}>Next</Text>

                </TouchableOpacity>
            </View>

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
        marginVertical: height * 0.02
    },

    inpCon: {
        marginVertical: height * 0.05

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

    btnCon: {

        flexDirection: "row",
        justifyContent: "space-between",

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
    btnlight: {
        width: width * 0.4,
        height: height * 0.06,
        backgroundColor: "#CCCCCC",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.03

    }

})

export default Vehicleinformaion