import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {BLACK, THEME_COLOR, WHITE} from '../../../utils/colors';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import Modal from 'react-native-modal';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemibold,
} from '../../../utils/font';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Data = [
  {
    id: 1,
    name: 'Economy',
    price: '$40',
  },
  {
    id: 2,
    name: 'Comfort',
    price: '$50',
  },
  {
    id: 3,
    name: 'Standard',
    price: '$60',
  },
  {
    id: 4,
    name: 'Business',
    price: '$80',
  },
  {
    id: 5,
    name: 'Economy',
    price: '$40',
  },
  {
    id: 6,
    name: 'Comfort',
    price: '$50',
  },
  {
    id: 7,
    name: 'Standard',
    price: '$60',
  },
  {
    id: 8,
    name: 'Business',
    price: '$80',
  },
];

const {height} = Dimensions.get('screen');

const UserDashboard = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isIndex, setisIndex] = useState(0);
  const [location, setLocation] = useState(0);
  const [Latitude, setLatitude] = useState(43.6534817);
  const [Longitude, setLongitude] = useState(-79.3839347);
  const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
  const circumference = (40075 / 360) * 1000;
  const [latDelta, setlatDelta] = useState(
    location?.accuracy * (1 / (Math.cos(Latitude) * circumference)),
  );
  const [lonDelta, setlonDelta] = useState(
    location?.accuracy / oneDegreeOfLongitudeInMeters,
  );
  const mapRef = useRef();
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    getLocation();
    requestLocationPermission();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position?.coords);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        mapRef?.current?.animateToRegion({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
          latitudeDelta: latDelta ? latDelta : 0.0661297227354396,
          longitudeDelta: lonDelta ? lonDelta : 0.14125518500804901,
        });
      },
      error => {
        console.log(error.code, error.message);
        setLocation(0);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
          return true;
        } else {
          return false;
        }
      } else if (Platform.OS === 'ios') {
        const result = await Geolocation.requestAuthorization('whenInUse');
        if (result === 'granted' || result === 'authorizedAlways') {
          getLocation();
          return true;
        } else {
          return false;
        }
      }
    } catch (err) {
      console.log('Error while requesting location permission:', err);
      return false;
    }
  };

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.main}>
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsCompass={false}
            mapType="standard"
            userInterfaceStyle="dark"
            showsUserLocation={true}
            showsMyLocationButton={true}
            toolbarEnabled={true}
            loadingIndicatorColor={THEME_COLOR}
            onRegionChangeComplete={region => {
              console.log('region changed', region);
              // setLatitude(region.latitude);
              // setlatDelta(region.latitudeDelta);
              // setLongitude(region.longitude);
              // setlonDelta(region.longitudeDelta);
            }}
            initialRegion={{
              latitude: Latitude,
              longitude: Longitude,
              latitudeDelta: latDelta ? latDelta : 0.0661297227354396,
              longitudeDelta: lonDelta ? lonDelta : 0.14125518500804901,
            }}>
            <Marker coordinate={{latitude: Latitude, longitude: Longitude}}>
              <View style={styles.markerDiv}>
                <Text style={styles.markerText}>2{'\n'}min</Text>
                <View style={styles.markerDiv2} />
              </View>
            </Marker>
          </MapView>
          <TouchableOpacity
            style={styles.backDiv}
            onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={'gray'} />
          </TouchableOpacity>

          <Modal
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            animationInTiming={5000}
            animationOutTiming={5000}
            backdropColor="black"
            backdropOpacity={0.7}
            visible={modalVisible}
            style={{
              justifyContent: 'flex-end',
            }}
            onBackButtonPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <TouchableOpacity
                style={styles.crosDiv}
                onPress={() => setModalVisible(false)}>
                <Ionicons name="close-circle" size={30} color={'red'} />
              </TouchableOpacity>
              <View style={styles.modalView}>
                <Text style={styles.heading}>Accounts</Text>
                <Text style={styles.subHeading}>Choose Account</Text>
                <View style={styles.imageDiv}>
                  <Image
                    source={require('../../../assets/pro.jpg')}
                    style={{height: '100%', width: '100%'}}
                    resizeMode={'cover'}
                  />
                </View>
                <Button
                  title={'Alex Jones'}
                  isOutlined={true}
                  style={styles.btn}
                />
                <Button title={'Add account'} style={styles.btn} />
              </View>
            </View>
          </Modal>
          {!modalVisible && (
            <BottomSheet
              ref={bottomSheetRef}
              // onChange={handleSheetChanges}
              handleIndicatorStyle={{backgroundColor: WHITE}}
              handleStyle={{
                backgroundColor: THEME_COLOR,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: 35,
              }}
              snapPoints={['48%']}>
              <BottomSheetView style={styles.bottomSheetMain}>
                <TouchableOpacity style={styles.toFrom}>
                  <Ionicons
                    name="ellipse-outline"
                    size={14}
                    color={THEME_COLOR}
                  />
                  <Text
                    style={{
                      ...styles.subHeading,
                      textAlign: 'left',
                      left: 10,
                      marginTop: 0,
                    }}>
                    Bahadur Shah Zafar Rd 16
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toFrom}>
                  <Ionicons
                    name="ellipse-outline"
                    size={14}
                    color={THEME_COLOR}
                  />
                  <Text
                    style={{
                      ...styles.subHeading,
                      textAlign: 'left',
                      left: 10,
                      marginTop: 0,
                    }}>
                    Expo Centre
                  </Text>
                </TouchableOpacity>
                <BottomSheetScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    height: height * 0.13,
                    marginVertical: 5,
                    // backgroundColor: 'red',
                  }}>
                  {Data.map((v, i) => {
                    return (
                      <TouchableOpacity
                        key={i}
                        style={{
                          width: isIndex == i ? 140 : 100,
                          marginHorizontal: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: isIndex == i ? '#EEEEEE' : null,
                          padding: isIndex == i ? 10 : null,
                          borderRadius: 10,
                          //   paddingHorizontal: isIndex == i ? 20 : null,
                        }}
                        onPress={() => setisIndex(i)}>
                        <Image
                          source={require('../../../assets/BookCar.png')}
                          style={{height: '50%', width: '80%'}}
                          resizeMode="contain"
                        />
                        <Text style={styles.carName}>{v.name}</Text>
                        <Text style={styles.carPrice}>{v.price}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </BottomSheetScrollView>
              </BottomSheetView>
              <BottomSheetView
                style={{
                  backgroundColor: '#EEE',
                  height: 80,
                  borderTopRightRadius: 25,
                  borderTopLeftRadius: 25,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 30,
                }}>
                <Ionicons name="cash-outline" size={36} color="#414141" />
                <Button
                  title={'Request'}
                  style={{width: '80%', backgroundColor: '#FF4931'}}
                  onPress={() =>
                    navigation.navigate('RequestCar', {
                      Latitude: Latitude,
                      Longitude: Longitude,
                    })
                  }
                />
              </BottomSheetView>
            </BottomSheet>
          )}
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default UserDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    width: '100%',
  },
  main: {
    flex: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  crosDiv: {
    justifyContent: 'flex-end',
    height: 40,
    width: 40,
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-end',
  },
  centeredView: {
    backgroundColor: WHITE,
    flex: 0.6,
    borderRadius: 10,
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
    marginTop: 10,
  },
  imageDiv: {
    height: 150,
    width: 150,
    borderRadius: 360,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: 20,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  bottomSheetMain: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: WHITE,
  },
  toFrom: {
    paddingVertical: 14,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
  },
  carName: {
    fontSize: 14,
    fontFamily: PoppinsSemibold,
    color: BLACK,
  },
  carPrice: {
    fontSize: 14,
    fontFamily: PoppinsSemibold,
    color: BLACK,
  },
  markerDiv: {
    backgroundColor: THEME_COLOR,
    height: 55,
    width: 55,
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  markerText: {
    fontSize: 14,
    // fontFamily: PoppinsBold,
    color: WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  markerDiv2: {
    position: 'absolute',
    top: 50,
    height: 35,
    width: 6,
    backgroundColor: THEME_COLOR,
    zIndex: 1,
  },
});
