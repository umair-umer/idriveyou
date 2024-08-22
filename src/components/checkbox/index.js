import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomCheckbox = ({ isChecked, onToggle, label }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onToggle}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Icon name="check" size={20} color="#fff" />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  checked: {
    backgroundColor:"#2C9BFF",
  },
  label: {
    fontSize: 16,
    color:"#fff"
  },
});

export default CustomCheckbox;