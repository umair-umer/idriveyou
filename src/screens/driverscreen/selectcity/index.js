import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const { width, height } = Dimensions.get("window")
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { calculateFontSize } from '../../../utils/font'
import Images from '../../../utils/im'
import Custombutton from '../../../components/cutomButton';
const GOOGLE_PLACES_API_KEY = 'AIzaSyBV_p4Zd0frLEef7ZDqd_26qC7kqQ5u2u4';
function Selectcityscreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.txt}>Select City</Text>
            </View>

            <View style={styles.inpCon}>
            <GooglePlacesAutocomplete
                    placeholder="Enter Your City Name"
                   
                    textInputProps={{
                      placeholderTextColor: '#000', // Set placeholder color to black
                   
                    }}
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'search'}
                    listViewDisplayed="auto"
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log('Selected Place:', data, details);
                    }}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                        types: '(cities)',
                    }}
                    styles={{
                        textInputContainer: {
                            width: '100%',
                            backgroundColor: 'transparent',
                    
                        },
                        textInput: {
                            height: height * 0.06,
                            borderWidth: 2,
                            borderColor: "#2C9BFF",
                            borderRadius: 30,
                            paddingHorizontal: width * 0.08,
                            color: "#000", // Set input text color
                        },
                        description: {
                            fontWeight: 'bold',
                            color: '#000', // Set suggestion item text color
                        },
                        predefinedPlacesDescription: {
                            color: '#000', // Set predefined suggestion text color
                        },
                        poweredContainer: {
                            display: 'none', // Hide powered by Google text
                        }
                    }}
                    renderDescription={(row) => row.description || row.vicinity}
                    enablePoweredByContainer={false}
                    debounce={200}
                />

             
            </View>

         


               {/* <TouchableOpacity style={styles.btnBox} onPress={()=>navigation.navigate('driverdetails')}>
             <View style={styles.imgBox}>
                    <Image
                     source={Images.bikewcar}
                     style={{width:"100%",height:"100%"}}
                     resizeMode='center'
                     />
                 </View>

                 <Text style={styles.txt2}>My own car or moto</Text>
                 <Text style={styles.txt3}>To complete trips</Text>
               </TouchableOpacity>  */}
               <View style={{    alignItems:"center"}}>

<Custombutton text={"Next"} onPress={()=>navigation.navigate("budget")}/>
               </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        padding: 10,
    
    },
    txt: {

        fontSize: calculateFontSize(20),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",
    },

    inpCon:{
        flex:1,
        marginVertical:height*0.04,
                //   zIndex:999999,
                //             backgroundColor:"red"
       
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
         color:"#000",
    },
    btnBox:{

        width: width * 0.95,
        height: height * 0.3,
        backgroundColor:"#2C9BFF",
        alignSelf:"center",
        borderRadius:20,
        marginVertical:height*0.02,
        justifyContent:"center",
        alignItems:"center",
        zIndex:-1111111
    },
    imgBox:{

        width: width * 0.95,
        height: height * 0.09,
        // backgroundColor:"#fff",


    },
    txt2: {

        fontSize: calculateFontSize(28),
        textAlign: "center",
        fontWeight: "700",
        color: "#fff"
    },
    txt3: {

        fontSize: calculateFontSize(20),
        textAlign: "center",
        fontWeight: "500",
        color: "#fff"
    },
    

})

export default Selectcityscreen