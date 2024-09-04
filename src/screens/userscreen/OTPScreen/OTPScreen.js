import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button/Button';
import BackHeader from '../../../components/BackHeader/BackHeader';
import {BLACK, THEME_COLOR, WHITE} from '../../../utils/colors';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const {height} = Dimensions.get('screen');

const OTPScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propsFiled, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <BackHeader
        icon={true}
        style={{backgroundColor: WHITE}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Enter Your Name</Text>
          <Text style={styles.subHeading}>
            We sent it to +00 000 0000 0000 in WhatsApp
          </Text>
          <View style={styles.OtpView}>
            <CodeField
              ref={ref}
              {...propsFiled}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          <View
            style={{
              height: height * 0.42,
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.subHeading}>Didn't receive it?</Text>
            <View style={styles.codeBtnDiv}>
              <Button
                title={'Resend code'}
                style={styles.codeBtn}
                textStyle={styles.titleStyle}
                onPress={() => {}}
              />
              <Button
                title={'Send by SMS'}
                style={styles.codeBtn}
                textStyle={styles.titleStyle}
                onPress={() => {}}
              />
              <Button
                title={'Request a call'}
                style={styles.codeBtn}
                textStyle={styles.titleStyle}
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Button
        title={'Confirm'}
        style={{width: '90%', alignSelf: 'center', marginVertical: 10}}
        onPress={() => navigation.navigate('UserDashboard')}
      />
    </SafeAreaView>
  );
};

export default OTPScreen;

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
    color: BLACK,
    fontSize: 24,
    fontFamily: PoppinsBold,
    textAlign: 'center',
  },
  subHeading: {
    color: BLACK,
    fontSize: 16,
    fontFamily: PoppinsRegular,
    textAlign: 'center',
    width: '86%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  OtpView: {
    borderRadius: 360,
    borderColor: THEME_COLOR,
    borderWidth: 2,
    marginHorizontal: 10,
    paddingVertical: 14,
    marginVertical: 40,
  },
  codeFieldRoot: {
    paddingHorizontal: 60,
  },
  cell: {
    borderBottomWidth: 2,
    borderBottomColor: THEME_COLOR,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: THEME_COLOR,
    fontSize: 26,
  },
  focusCell: {
    borderColor: THEME_COLOR,
  },
  codeBtnDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    width: '85%',
    alignSelf: 'center',
  },
  codeBtn: {
    backgroundColor: '#EEEEEE',
    width: '48%',
    marginVertical: 4,
  },
  titleStyle: {
    fontSize: 15,
    fontFamily: PoppinsRegular,
    color: BLACK,
  },
});
