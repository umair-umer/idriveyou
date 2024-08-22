import React, { useMemo, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { calculateFontSize } from '../../../utils/font';
import Custombutton from '../../../components/cutomButton';

const { width, height } = Dimensions.get("window");

const group1Data = [
    { id: '1', label: '$100-$500', value: 'option1',labelStyle:{color:"#000"}  },
    { id: '2', label: '$500-$1k', value: 'option2',labelStyle:{color:"#000"}  },
    { id: '3', label: '$1k-$2k', value: 'option3',labelStyle:{color:"#000"}  }
];

const group2Data = [
    { id: '4', label: '$100-$500', value: 'optionA',labelStyle:{color:"#000"}  },
    { id: '5', label: '$500-$1k', value: 'optionB',labelStyle:{color:"#000"}  },
    { id: '6', label: '$1k-$2k', value: 'optionC',labelStyle:{color:"#000"}  }
];

const group3Data = [
    { id: '7', label: '$1k-$2k', value: 'optionX' ,labelStyle:{color:"#000"} },
    { id: '8', label: '$1k-$2k', value: 'optionY',labelStyle:{color:"#000"}  },
    { id: '9', label: '$1k-$2k', value: 'optionZ' ,labelStyle:{color:"#000"} }
];

const group4Data = [
    { id: '7', label: '$1k-$2k', value: 'option1' ,labelStyle:{color:"#000"} },
    { id: '8', label: '$1k-$2k', value: 'option3' ,labelStyle:{color:"#000"} },
    { id: '9', label: '$1k-$2k', value: 'optionZ',labelStyle:{color:"#000"}  }
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
                    color="#444"

                />
            </View>
        </>
    );
};

function BudgetScreen({navigation}) {
    const [selectedId1, setSelectedId1] = useState(null);
    const [selectedId2, setSelectedId2] = useState(null);
    const [selectedId3, setSelectedId3] = useState(null);
    const [selectedId4, setSelectedId4] = useState(null);


    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Your budget</Text>
                </View>
                <RadioButtonGroup
                    label="What is your per day budget:"
                    radioButtons={group1Data}
                    selectedId={selectedId1}
                    setSelectedId={setSelectedId1}


                />
                <RadioButtonGroup
                    label="What is your per week budget:"
                    radioButtons={group2Data}
                    selectedId={selectedId2}
                    setSelectedId={setSelectedId2}
                />
                <RadioButtonGroup
                    label="What is your Monthly budget:"
                    radioButtons={group3Data}
                    selectedId={selectedId3}
                    setSelectedId={setSelectedId3}
                />
                <RadioButtonGroup
                    label="What is your yearly budget:"
                    radioButtons={group4Data}
                    selectedId={selectedId4}
                    setSelectedId={setSelectedId4}
                />
            </View>
            <View style={{ height: height * 0.3, justifyContent: "flex-end" }}>
                <Custombutton text={"next"}  onPress={()=>navigation.navigate("drivinglicense")}/>

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
        padding: 10
    },
    labelContainer: {
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: "#fff",
        padding: 10
    },
    radioContainer: {
        width: width * 0.97,
        height: height * 0.08,
        flexDirection: "row",
    },
    radioLabel: {
        fontSize: calculateFontSize(17),
        color: "#2C9CFF",
        fontWeight: "600"
    },
    radioGroup: {
        flexDirection: 'row',

    },
    headerText: {
        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    }
});

export default BudgetScreen;