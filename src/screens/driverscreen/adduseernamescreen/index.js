import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native'
const { width, height } = Dimensions.get("window")
import CustomCheckbox from '../../../components/checkbox'
import Custombutton from '../../../components/cutomButton'
import { calculateFontSize } from '../../../utils/font'
import Images from '../../../utils/im'
function Addusernamescreen({navigation}) {

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ImageBackground source={Images.getstarted} style={styles.container}>

            <View style={styles.mainCon}>
               
              


                <View style={styles.inpCon}>
                  <TextInput
                        placeholder='First name'
                        placeholderTextColor={"#fff"}
                        style={styles.inp}
                    />   
                    <TextInput
                        placeholder='last name'
                        placeholderTextColor={"#fff"}
                        style={styles.inp}
                    /> 
                    <View style={styles.condition}>
                        <View>
                            <CustomCheckbox
                                isChecked={isChecked}
                                onToggle={toggleCheckbox}
                                label="Terms and conditions"
                                style={styles.txtslogan1}
                            />

                        </View>


                     
                    </View>

                    <Custombutton text={'Next'} onPress={() => navigation.navigate('stateselect')} />
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({

    container: {
flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        // backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.08


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

        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },
    inpCon: {

        width: width * 0.9,
        height: height * 0.4,
        // backgroundColor: "white",
        marginTop: height * 0.3,
        padding: 10
    },
    txtslogan: {
        fontSize: calculateFontSize(14),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",

    },
    condition: {

        flexDirection: "row",
        justifyContent: "space-between",

    },
    txtslogan1: {
        fontSize: calculateFontSize(15),
        textAlign: "center",
        fontWeight: "500",
        color: "#fff",

    },
    inp:{
         
        // width:width*0.9,
        paddingHorizontal:width*0.06,
        height:height*0.06,
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:30,
        marginVertical:height*0.014,
        color:"#fff"
  }


})
export default Addusernamescreen