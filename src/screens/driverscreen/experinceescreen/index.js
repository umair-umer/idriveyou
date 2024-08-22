import React, { useMemo, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { calculateFontSize } from '../../../utils/font';
import Custombutton from '../../../components/cutomButton';

const { width, height } = Dimensions.get("window");

const group1Data = [
    { id: '1', label: 'Yes', value: 'option1',labelStyle:{color:"#000"} },
    { id: '2', label: 'No', value: 'option2',labelStyle:{color:"#000"}  },

];

const group2Data = [
    { id: '4', label: 'Yes', value: 'optionA' ,labelStyle:{color:"#000"} },
    { id: '5', label: 'No', value: 'optionB',labelStyle:{color:"#000"}  },
];

const group3Data = [
    { id: '7', label: 'Yes', value: 'optionX',labelStyle:{color:"#000"}  },
    { id: '8', label: 'No', value: 'optionY' ,labelStyle:{color:"#000"} },
];



const RadioButtonGroup = ({ label, radioButtons, selectedId, setSelectedId }) => {
    return (
        <>
            <View style={styles.labelContainer}>
                <Text style={styles.radioLabel}>{label}</Text>
            </View>
            <View style={styles.radioContainer}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    containerStyle={styles.radioGroup}
                />
            </View>
        </>
    );
};

function Experiencscreen({ navigation }) {
    const [selectedId1, setSelectedId1] = useState(null);
    const [selectedId2, setSelectedId2] = useState(null);
    const [selectedId3, setSelectedId3] = useState(null);



    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Your budget</Text>
                </View>
                <RadioButtonGroup
                    label="Did you have any professional experience:"
                    radioButtons={group1Data}
                    selectedId={selectedId1}
                    setSelectedId={setSelectedId1}
                />
                <RadioButtonGroup
                    label="Did you work other ride share apps :"
                    radioButtons={group2Data}
                    selectedId={selectedId2}
                    setSelectedId={setSelectedId2}
                />
                <RadioButtonGroup
                    label="Did you work Delivery apps"
                    radioButtons={group3Data}
                    selectedId={selectedId3}
                    setSelectedId={setSelectedId3}
                />

            </View>
            <View style={{ justifyContent: "flex-end", height: height * 0.3 }}>

                <Custombutton text={"Next"} onPress={() => navigation.navigate('DRAWER')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 10
    },
    mainContainer: {
        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.04
    },
    headerContainer: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "#fff",
    },
    labelContainer: {
        width: width * 0.9,
        height: height * 0.03,
        backgroundColor: "#fff",
    },
    radioContainer: {
        width: width * 0.97,
        height: height * 0.08,
        flexDirection: "row",
    },
    radioLabel: {
        fontSize: calculateFontSize(16),
        color: "#2C9CFF",
        fontWeight: "600"
    },
    radioGroup: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    }
});

export default Experiencscreen;