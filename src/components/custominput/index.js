import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {calculateFontSize, PoppinsRegular} from '../../utils/font';
import {THEME_COLOR} from '../../utils/colors';
const {width, height} = Dimensions.get('window');

const Inputcustoms = ({placeholder, value, onChangeText,keyboardType}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'#2C9BFF'}
      style={styles.inp}
      cursorColor={THEME_COLOR}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  inp: {
    borderWidth: 2,
    borderColor: '#2C9BFF',
    borderRadius: 30,
    marginVertical: 10,
    color: '#2C9BFF',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: PoppinsRegular,
    fontSize: 16,
  },
});

export default Inputcustoms;
