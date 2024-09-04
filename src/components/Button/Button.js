import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {PoppinsBold} from '../../utils/font';
import {THEME_COLOR, WHITE} from '../../utils/colors';

const Button = ({onPress, title, style, textStyle, disabled, isOutlined}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: isOutlined ? null : THEME_COLOR,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      borderWidth: isOutlined ? 1 : null,
      borderColor: isOutlined ? THEME_COLOR : null,
    },
    buttonText: {
      color: isOutlined ? THEME_COLOR : WHITE,
      fontSize: 16,
      fontFamily: PoppinsBold,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
