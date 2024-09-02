import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {THEME_COLOR, WHITE} from '../../../utils/colors';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../../utils/im';
import Button from '../../../components/Button/Button';

const StartScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      <View style={styles.main}>
        <Text style={styles.heading}>In-App Navigation</Text>
        <Text style={styles.subHeading}>
          Turn-by-turn instructions and route planning right in the I will drive
          you app.
        </Text>

        <View style={styles.navigateBox}>
          <Image
            source={Images.Complete}
            style={{width: '100%', height: '80%'}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.btnDiv}>
          <Text style={styles.enableText}>Enable</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={WHITE}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Button
          title={'OK'}
          style={styles.btnStyle}
          textStyle={{color: THEME_COLOR}}
          onPress={() => navigation.navigate('NameScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: THEME_COLOR,
  },
  main: {
    flex: 1,
    width: '96%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: WHITE,
    fontSize: 24,
    fontFamily: PoppinsBold,
    textAlign: 'center',
  },
  subHeading: {
    color: WHITE,
    fontSize: 16,
    fontFamily: PoppinsRegular,
    textAlign: 'center',
    width: '86%',
    alignSelf: 'center',
    marginVertical: 30,
  },
  navigateBox: {
    height: 350,
    width: '86%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enableText: {
    fontSize: 16,
    fontFamily: PoppinsBold,
    color: WHITE,
  },
  btnDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  btnStyle: {
    backgroundColor: WHITE,
    marginVertical: 10,
    width: '96%',
    alignSelf: 'center',
  },
});
