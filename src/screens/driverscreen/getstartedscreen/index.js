import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../../utils/font'
import Custombutton from '../../../components/cutomButton'
import Images from '../../../utils/im'
const { width, height } = Dimensions.get("window")

export const Getstarted = ({ navigation }) => {
    return (
        <ImageBackground source={Images.getstarted} style={{ justifyContent: "flex-end", width: "100%", height: "100%", alignItems: "center" }}>
            <View style={{  }}>
                <Custombutton text={"Get started"} onPress={() => navigation.navigate("loginD")} />
            </View>


        </ImageBackground>
    )
} 
