import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';
import MapViewDirections from 'react-native-maps-directions';
const { width, height } = Dimensions.get("window")
const GOOGLE_MAPS_APIKEY = 'AIzaSyBV_p4Zd0frLEef7ZDqd_26qC7kqQ5u2u4';
import Geolocation from '@react-native-community/geolocation';
import MapHome from '../../../components/map';
export const DRiverHome = ({ navigation }) => {
  const pickupLocation = {
    latitude: 24.8741,
    longitude: 67.0314, // Lyari, Karachi
  };

  const dropLocation = {
    latitude: 24.8607,
    longitude: 67.0011, // Saddar, Karachi
  };


  return (
    <View style={styles.container}>
      <View style={styles.profileconainter}>
        <TouchableOpacity
          // style={styles.profileconainter}
          onPress={() => navigation.openDrawer()}
        >
          <Entypo name="menu" size={30} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <MapHome
        pickupLocation={pickupLocation}
        dropLocation={dropLocation}
        onRouteCalculated={(coordinates) => console.log('Route coordinates:', coordinates)}
      />

    </View>
  );
};

export default DRiverHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  map: {
    flex: 1,
  },
  profileconainter: {
    position: "absolute",
    backgroundColor: "#2C9BFF",
    width: width * 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    // top: 20,
    zIndex: 9999,
    alignSelf: "center",
    borderBottomEndRadius:20,
    borderBottomStartRadius:20
  }
});
