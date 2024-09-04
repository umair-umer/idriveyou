import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../../../utils/colors';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';
import Button from '../../../components/Button/Button';
import {CommonActions} from '@react-navigation/native';

const PaymentSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <View style={styles.main}>
        <View style={styles.con}>
          <Image
            source={require('../../../assets/paySuccess.png')}
            resizeMode="contain"
            style={{height: 100, width: '100%'}}
          />
          <Text style={styles.heading}>Payment Successful</Text>
        </View>
      </View>
      <Button
        title={'Return Home'}
        style={styles.btn}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'UserDashboard'}],
            }),
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    width: '100%',
  },
  main: {
    flex: 1,
    width: '96%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 24,
    fontFamily: PoppinsRegular,
    color: BLACK,
    textAlign: 'center',
    marginTop: 20,
  },
  subheading: {
    fontSize: 16,
    color: WHITE,
    marginTop: 10,
  },
  con: {
    marginTop: 120,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
