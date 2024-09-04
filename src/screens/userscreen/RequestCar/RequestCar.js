import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {BLACK, THEME_COLOR, WHITE} from '../../../utils/colors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import Button from '../../../components/Button/Button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';

const {height} = Dimensions.get('screen');

const RequestCar = ({navigation, route}) => {
  const [isIndex, setisIndex] = useState(0);
  const [showDriver, setshowDriver] = useState(false);
  const [location, setLocation] = useState(0);
  const [Latitude, setLatitude] = useState(
    route.params?.Latitude ? route.params?.Latitude : 43.6534817,
  );
  const [Longitude, setLongitude] = useState(
    route.params?.Longitude ? route.params?.Longitude : -79.3839347,
  );
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
    setTimeout(() => {
      setshowDriver(true);
    }, 5000);
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
              setLatitude(region.latitude);
              setlatDelta(region.latitudeDelta);
              setLongitude(region.longitude);
              setlonDelta(region.longitudeDelta);
              mapRef.current.animateCamera({
                center: {
                  latitude: region.latitude,
                  longitude: region.longitude,
                },
              });
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

          <BottomSheet
            ref={bottomSheetRef}
            handleIndicatorStyle={{backgroundColor: THEME_COLOR}}
            handleStyle={{
              backgroundColor: WHITE,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              height: 0,
            }}
            snapPoints={['45%', '80%']}>
            <BottomSheetView style={styles.bottomSheetMain}>
              {!showDriver ? (
                <View style={styles.toFrom}>
                  <View style={styles.rowDiv}>
                    <Text style={styles.subHeading}>2+ cars nearby</Text>
                    <Text style={styles.subHeading}>00:44</Text>
                  </View>
                  <Text style={styles.grayText}>
                    Picking the one for your ride
                  </Text>
                </View>
              ) : (
                <View style={styles.toFrom}>
                  <Text style={styles.arriving}>Arriving in ~ 2 min</Text>
                  <View style={styles.rowDiv}>
                    <View>
                      <View
                        style={{
                          ...styles.rowDiv,
                          justifyContent: 'flex-start',
                        }}>
                        <Text style={styles.name}>Alex Jones</Text>
                        <Ionicons
                          name="star"
                          color={BLACK}
                          size={24}
                          style={{left: 10}}
                        />
                        <Text style={{...styles.name, left: 20}}>4.92</Text>
                      </View>
                      <Text style={styles.subHeading}>Car Name here</Text>
                      <Text style={styles.numberPlate}>BKP - 965</Text>
                    </View>
                    <Image
                      source={require('../../../assets/driverLogo.png')}
                      style={{
                        height: 100,
                        width: '30%',
                        // backgroundColor: 'red',
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      ...styles.rowDiv,
                      justifyContent: 'flex-start',
                      marginVertical: 10,
                    }}>
                    <TouchableOpacity
                      style={{...styles.btn, backgroundColor: '#00CA50'}}>
                      <Ionicons name="call" color={WHITE} size={24} />
                      <Text style={{...styles.btnText, color: WHITE}}>
                        Call
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btn}}>
                      <Ionicons name="chatbubble" color={'#565656'} size={24} />
                      <Text style={styles.btnText}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                      <MaterialCommunityIcons
                        name="share"
                        color={'#565656'}
                        size={28}
                      />
                      <Text style={styles.btnText}>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              <TouchableOpacity style={styles.toFrom}>
                <View style={styles.rowDiv}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../../../assets/driverLogo.png')}
                      style={{height: 35, width: 30}}
                      resizeMode="contain"
                    />
                    <View style={{left: 10}}>
                      <Text style={styles.grayText}>Pickup</Text>
                      <Text style={styles.subHeading}>
                        Bahadur Shah Zafar Rd 16
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={28} color={BLACK} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.toFrom}>
                <View style={styles.rowDiv}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="add"
                      size={32}
                      color={'gray'}
                      style={{right: 5}}
                    />
                    <Text style={styles.subHeading}>Add stop</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={28} color={BLACK} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.toFrom}>
                <View style={styles.rowDiv}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="flag" size={28} color={BLACK} />
                    <View style={{left: 10}}>
                      <Text style={styles.grayText}>Destination</Text>
                      <Text style={styles.subHeading}>Expo Centre</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={28} color={BLACK} />
                </View>
              </TouchableOpacity>
              <Button
                title={'next'}
                style={{marginTop: 15}}
                onPress={() => navigation.navigate('Receipt')}
              />
            </BottomSheetView>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default RequestCar;

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
    backgroundColor: WHITE,
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
  bottomSheetMain: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: WHITE,
  },
  toFrom: {
    paddingVertical: 14,
    margin: 2,
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  subHeading: {
    color: BLACK,
    fontSize: 16,
    fontFamily: PoppinsRegular,
  },
  rowDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  grayText: {
    fontSize: 14,
    color: '#A8A8A8',
    fontFamily: PoppinsRegular,
  },
  name: {
    fontSize: 18,
    color: BLACK,
    fontFamily: PoppinsBold,
    paddingTop: 10,
  },
  numberPlate: {
    borderRadius: 10,
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: PoppinsBold,
    color: BLACK,
    borderWidth: 2,
    borderColor: '#565656',
    // width: '40%',
    textAlign: 'center',
    marginVertical: 6,
  },
  btn: {
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#DBDBDB',
    width: '28%',
    paddingVertical: 12,
  },
  btnText: {
    color: '#565656',
    fontSize: 16,
    fontFamily: PoppinsBold,
    paddingLeft: 4,
  },
  arriving: {
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '106%',
    alignSelf: 'center',
    left: 10,
    fontSize: 18,
    fontFamily: PoppinsRegular,
    color: BLACK,
  },
});
