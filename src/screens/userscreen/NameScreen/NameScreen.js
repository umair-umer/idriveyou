import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BLACK, WHITE} from '../../../utils/colors';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';
import BackHeader from '../../../components/BackHeader/BackHeader';
import Inputcustoms from '../../../components/custominput';
import Button from '../../../components/Button/Button';

const NameScreen = ({navigation}) => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <BackHeader
        icon={true}
        style={{backgroundColor: WHITE}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.heading}>Enter Your Name</Text>
          <Text style={styles.subHeading}>
            Use your real name so drivers can identify you faster and easier.
            This helps make your rides safer.
          </Text>
          <View style={styles.inputDiv}>
            <Inputcustoms
              placeholder={'First Name'}
              value={fname}
              onChangeText={setfname}
            />
            <Inputcustoms
              placeholder={'Last Name'}
              value={lname}
              onChangeText={setlname}
            />
            <Inputcustoms
              placeholder={'Phone Number'}
              value={lname}
              onChangeText={setlname}
              keyboardType={'number-pad'}
            />
          </View>
        </ScrollView>
      </View>
      <Button
        title={'Next'}
        style={{width: '90%', alignSelf: 'center', marginVertical: 10}}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default NameScreen;

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
  inputDiv: {
    width: '90%',
    alignSelf: 'center',
  },
});
