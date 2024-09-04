import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK, THEME_COLOR, WHITE} from '../../../utils/colors';
import BackHeader from '../../../components/BackHeader/BackHeader';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';
import Button from '../../../components/Button/Button';

const Receipt = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <BackHeader
        icon={true}
        onPress={() => navigation.goBack()}
        style={{backgroundColor: WHITE}}
      />
      <View style={styles.main}>
        <Text style={styles.heading}>You have reached your destination</Text>
        <Text style={styles.grayText}>10:40 PM</Text>
        <Text style={styles.amount}>$131.83</Text>
        <View style={styles.rowDivMain}>
          <View style={styles.rowDiv}>
            <Text style={styles.normalText}>Fare</Text>
            <Text style={styles.normalText}>$32.55</Text>
          </View>
          <View style={styles.rowDiv}>
            <Text style={styles.normalText}>Surge</Text>
            <Text style={styles.normalText}>$65.10</Text>
          </View>
          <View style={styles.rowDiv}>
            <Text style={styles.normalText}>Uber Fee</Text>
            <Text style={styles.normalText}>$32.55</Text>
          </View>
        </View>
        <View style={styles.totalDiv}>
          <Text style={styles.normalText}>Total Amount</Text>
          <Text style={styles.normalText}>$131.83</Text>
        </View>
      </View>
      <Button
        title={'Pay Now'}
        style={styles.payBtn}
        onPress={() => navigation.navigate('Payment')}
      />
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    width: '100%',
  },
  backDiv: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    width: '96%',
    alignSelf: 'center',
  },
  heading: {
    color: BLACK,
    fontSize: 20,
    fontFamily: PoppinsBold,
    textAlign: 'center',
    width: '70%',
  },
  grayText: {
    fontSize: 14,
    color: '#A8A8A8',
    fontFamily: PoppinsRegular,
    marginVertical: 20,
  },
  amount: {
    color: THEME_COLOR,
    fontSize: 52,
    fontFamily: PoppinsBold,
    textAlign: 'center',
    marginBottom: 10,
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    width: '90%',
  },
  rowDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  normalText: {
    color: BLACK,
    fontSize: 14,
    fontFamily: PoppinsRegular,
    marginVertical: 10,
  },
  rowDivMain: {
    width: '90%',
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  totalDiv: {
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  payBtn: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
