import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {THEME_COLOR, WHITE} from '../utils/colors';
import Button from '../components/Button/Button';
import {PoppinsBold, PoppinsRegular} from '../utils/font';
import {useDispatch} from 'react-redux';
import {userRole} from '../stores/actions/userAction';
import Loader from '../components/Loader/Loader';

const SelectionType = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = data => {
    setisLoading(true);
    dispatch(userRole(data));
    setTimeout(() => {
      setisLoading(false);
      navigation.navigate('AppNavigator');
    }, 1000);
  };

  return (
    <ImageBackground
      source={require('../assets/BGIMG.png')}
      resizeMode="cover"
      style={styles.container}>
      {isLoading && <Loader color={WHITE} />}
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      <SafeAreaView style={styles.main}>
        <View style={styles.logoDiv}>
          <Image
            source={require('../assets/Logo.png')}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <Text style={styles.heading}>Welcome to i'll DriveYou</Text>
        <Text style={styles.subHeading}>Choose your role</Text>

        <Button
          title="User"
          isOutlined={true}
          style={styles.btn}
          textStyle={styles.titleStyle}
          onPress={() => handleSubmit('user')}
        />
        <Button
          title="Driver"
          isOutlined={true}
          style={styles.btn}
          textStyle={styles.titleStyle}
          onPress={() => handleSubmit('driver')}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SelectionType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    width: '100%',
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoDiv: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    color: WHITE,
    textAlign: 'center',
    fontFamily: PoppinsBold,
  },
  subHeading: {
    fontSize: 18,
    color: WHITE,
    textAlign: 'center',
    fontFamily: PoppinsRegular,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  btn: {
    // backgroundColor: WHITE,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    borderColor: WHITE,
  },
  titleStyle: {
    color: WHITE,
    fontSize: 18,
  },
});
