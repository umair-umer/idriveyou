import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Custombutton from '../../../components/cutomButton';

const { width, height } = Dimensions.get("window");
const GOOGLE_PLACES_API_KEY = 'AIzaSyBV_p4Zd0frLEef7ZDqd_26qC7kqQ5u2u4';

function SElectstate({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.txt}>Select State</Text>
            </View>



            {/* State Input */}
            <View style={styles.inpCon}>
                {/* <Text style={styles.label}>Select State</Text> */}
                <GooglePlacesAutocomplete
                    placeholder="Enter Your State Name"
                    textInputProps={{
                        placeholderTextColor: '#000',
                    }}
                    minLength={2}
                    returnKeyType={'search'}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log('Selected State:', data, details);
                    }}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                        types: '(regions)',
                        componentRestrictions: { country: 'us' } 
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
                            color: "#000",
                        },
                        description: {
                            fontWeight: 'bold',
                            color: '#000',
                        },
                        predefinedPlacesDescription: {
                            color: '#000',
                        },
                        poweredContainer: {
                            display: 'none',
                        }
                    }}
                    renderDescription={(row) => row.description || row.vicinity}
                    debounce={200}
                />
            </View>


            <View style={{ alignItems: "center" }}>
                <Custombutton text={"Next"} onPress={() => navigation.navigate("cityselect")} />
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
        fontSize: 24,
        textAlign: "center",
        fontWeight: "700",
        color: "#000",
    },
    inpCon: {
        flex: 1,
        marginVertical: height * 0.04,
    },
    stateInputContainer: {
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        color: "#000",
        marginBottom: 10,
        marginLeft: width * 0.08,
    },
    btnBox: {
        width: width * 0.95,
        height: height * 0.3,
        backgroundColor: "#2C9BFF",
        alignSelf: "center",
        borderRadius: 20,
        marginVertical: height * 0.02,
        justifyContent: "center",
        alignItems: "center",
    },
    imgBox: {
        width: width * 0.95,
        height: height * 0.09,
    },
    txt2: {
        fontSize: 28,
        textAlign: "center",
        fontWeight: "700",
        color: "#fff",
    },
    txt3: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "500",
        color: "#fff",
    },
});

export default SElectstate;
