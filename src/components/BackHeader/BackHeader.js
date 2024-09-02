import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {THEME_COLOR, WHITE} from '../../utils/colors';
import {PoppinsBold} from '../../utils/font';

const BackHeader = ({icon, title, onPress, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {icon && (
        <TouchableOpacity style={styles.backBtnDiv} onPress={onPress}>
          <Ionicons name="arrow-back" size={24} color={'gray'} />
        </TouchableOpacity>
      )}
      <View
        style={{
          ...styles.divTitle,
          width: icon ? '90%' : '100%',
          right: icon ? 20 : 0,
        }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLOR,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  backBtnDiv: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divTitle: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: WHITE,
    fontSize: 18,
    fontFamily: PoppinsBold,
    textAlign: 'center',
  },
});
