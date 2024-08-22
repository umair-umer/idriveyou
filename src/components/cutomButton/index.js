
import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { calculateFontSize } from '../../utils/font'
const { width, height } = Dimensions.get("window")
function Custombutton({onPress,text}) {
    const navigation =useNavigation()
    return (
        <TouchableOpacity style={styles.btnCon}
        onPress={onPress}
        // onPress={()=>navigation.navigate("accountscreen")}
        >

            <Text style={styles.txt}>{text}</Text>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({

    btnCon: {
        width: width * 0.85,
        height: height * 0.06,
        backgroundColor: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical:height*0.03

    },
    txt:{

         color:"#fff",
         fontSize:calculateFontSize(16),
         fontWeight:"500"
    }

})

export default Custombutton
