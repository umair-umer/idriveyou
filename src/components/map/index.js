import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import polyline from '@mapbox/polyline';  // Import polyline library

const GOOGLE_MAPS_APIKEY = 'AIzaSyBV_p4Zd0frLEef7ZDqd_26qC7kqQ5u2u4'; // Replace with your API Key

const MapHome = ({pickupLocation, dropLocation, onRouteCalculated}) => {
  const [location, setLocation] = useState(null);
  const [currentLocationName, setCurrentLocationName] = useState(''); // Store the name of the current location
  const [pickupLocationName, setPickupLocationName] = useState(''); // Store the name of the pickup location
  const [dropLocationName, setDropLocationName] = useState(''); // Store the name of the drop location
  const [directions, setDirections] = useState([]);
  const [secondLegDirections, setSecondLegDirections] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [nearbyPlaces, setNearbyPlaces] = useState([]); // To store nearby places
  const [isFollowingUser, setIsFollowingUser] = useState(true); // Track whether the map is following the user

  useEffect(() => {
    const getLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        console.error('Location permission denied');
        return;
      }

      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchLocationName(latitude, longitude, setCurrentLocationName); // Fetch the current location name
          fetchNearbyPlaces(latitude, longitude); // Fetch nearby places after getting location
        },
        error => {
          console.error(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    getLocation();
    // Fetch the names of the pickup and drop locations
    fetchLocationName(pickupLocation.latitude, pickupLocation.longitude, setPickupLocationName);
    fetchLocationName(dropLocation.latitude, dropLocation.longitude, setDropLocationName);
  }, []);

  useEffect(() => {
    if (location && pickupLocation) {
      fetchDirections(location, pickupLocation, setDirections);
    }
  }, [location]);

  useEffect(() => {
    if (pickupLocation && dropLocation) {
      fetchDirections(pickupLocation, dropLocation, setSecondLegDirections);
    }
  }, [pickupLocation]);

  const fetchDirections = async (
    origin,
    destination,
    setDirectionsFunction,
  ) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${GOOGLE_MAPS_APIKEY}`,
      );
      const data = await response.json();

      if (data.status !== 'OK') {
        console.error(
          'Error fetching directions:',
          data.error_message || data.status,
        );
        return;
      }

      if (!data.routes || data.routes.length === 0) {
        console.error('No routes found');
        return;
      }

      const points = polyline.decode(data.routes[0].overview_polyline.points); // Decode polyline points
      const coordinates = points.map(point => ({
        latitude: point[0],
        longitude: point[1],
      }));

      setDirectionsFunction(coordinates);
      setSteps(data.routes[0].legs[0].steps); // Save steps for displaying directions
      onRouteCalculated(coordinates); // Inform parent component
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

  const fetchNearbyPlaces = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=point_of_interest&key=${GOOGLE_MAPS_APIKEY}`,
      );
      const data = await response.json();

      if (data.status !== 'OK') {
        console.error(
          'Error fetching nearby places:',
          data.error_message || data.status,
        );
        return;
      }

      setNearbyPlaces(data.results);
    } catch (error) {
      console.error('Error fetching nearby places:', error);
    }
  };

  const fetchLocationName = async (latitude, longitude, setLocationName) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_APIKEY}`,
      );
      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0].formatted_address;
        setLocationName(address);
      } else {
        console.error('Error fetching location name:', data.status);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This app needs to access your location',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const handleRegionChangeComplete = () => {
    if (isFollowingUser) {
      setIsFollowingUser(false);
    }
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onRegionChangeComplete={handleRegionChangeComplete}>
          {/* Custom Marker for Current Location */}
          <Marker
            coordinate={location}
            title={currentLocationName || "Your Location"}
          >
            <Image
              source={require('../../assets/car.png')}
              style={{ width: 30, height: 30 }}  // Adjust these values to resize
            />
          </Marker>
          <Marker coordinate={pickupLocation} title={pickupLocationName || "Pickup Point"} />
          <Marker coordinate={dropLocation} title={dropLocationName || "Drop Point"} />
          {directions.length > 0 && (
            <Polyline
              coordinates={directions}
              strokeWidth={5}
              strokeColor="blue"
            />
          )}
          {secondLegDirections.length > 0 && (
            <Polyline
              coordinates={secondLegDirections}
              strokeWidth={5}
              strokeColor="green"
            />
          )}

          {/* Render markers for nearby places */}
          {nearbyPlaces.map((place, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}
              title={place.name}
              description={place.vicinity}
            />
          ))}
        </MapView>
      ) : (
        <Text>Loading Map...</Text>
      )}

      {/* <View style={styles.instructionsContainer}>
        <Text style={styles.heading}>Next Step:</Text>
        {steps.length > 0 && currentStepIndex < steps.length ? (
          <Text style={styles.instructionText}>
            {steps[currentStepIndex].html_instructions.replace(
              /<[^>]*>?/gm,
              '',
            )}
          </Text>
        ) : (
          <Text style={styles.instructionText}>
            You have arrived at your destination.
          </Text>
        )}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  instructionsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  instructionText: {
    fontSize: 14,
    marginVertical: 2,
    color: '#000',
  },
});

export default MapHome;
