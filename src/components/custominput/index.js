
import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { calculateFontSize } from '../../utils/font'
const { width, height } = Dimensions.get("window")
function Inputcustoms() {
    return (
        <View style={styles.inpmain}>
           {/* <TextInput
           placeholder='UserName '
           placeholderTextColor={"#2C9BFF"}
           style={styles.inp}
           /> */}
            <TextInput
           placeholder='Phone Number'
           placeholderTextColor={"#2C9BFF"}
           style={styles.inp}
           />


        </View>
    )
}

const styles = StyleSheet.create({

  inp:{
         
        // width:width*0.9,
        paddingHorizontal:width*0.3,
        height:height*0.06,
        borderWidth:2,
        borderColor:"#2C9BFF",
        borderRadius:30,
        marginVertical:height*0.014,
        color:"#2C9BFF"
  }

})

export default Inputcustoms
