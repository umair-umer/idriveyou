import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Custombutton from '../../../components/cutomButton'
import Inputcustoms from '../../../components/custominput'
import { calculateFontSize } from '../../../utils/font'
const { width, height } = Dimensions.get("window")

function DriverLoginScreen({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                  <Text style={styles.txt}>Log in with</Text>
                  <Text style={styles.txt}>your phone number</Text>

               
                </View>
                <View style={styles.whiteCon}>
                  <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                  <Text style={styles.txtslogan}>with your phone numberr</Text>

               
                </View>


                <View style={styles.inpCon}>
                   <Inputcustoms/>
                   <Custombutton text={'Login'} onPress={()=>navigation.navigate('otp')}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height:"100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding:10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.08


    },
    whiteCon:{
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center"  ,
        padding:10        
    },
    txt:{

         fontSize:calculateFontSize(24),
         textAlign:"center",
         fontWeight:"700",
         color:"#000"
    },
    inpCon:{

        width: width * 0.9,
        height: height * 0.4,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:height*0.04,
        padding:10  
    },
    txtslogan:{
        fontSize:calculateFontSize(16),
        textAlign:"center",
        fontWeight:"500",
        color:"#000",

    }

})
export default DriverLoginScreen