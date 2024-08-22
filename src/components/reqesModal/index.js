import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { calculateFontSize } from '../../utils/font';
const { width, height } = Dimensions.get("window");

const AceeptModal = ({ isModalVisible, pickupLocation, dropLocation, onAccept, onCancel }) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={onCancel}
        style={styles.modal}
        swipeDirection="down"
      >
        <View style={styles.modalContent}>
          <View style={styles.timeofreqest}>
            <Text style={styles.text2}>2</Text>
            <Text style={styles.min}>Minutes</Text>
          </View>
          <View style={styles.locationRow}>
            <View style={styles.locationType}>
              <Text style={styles.drp}>Pickup</Text>
            </View>
            <View style={styles.locationDetail}>
              <Text style={styles.drp}>{pickupLocation ? pickupLocation.name : 'Location'}</Text>
            </View>
          </View>
          <View style={styles.locationRow}>
            <View style={styles.locationType}>
              <Text style={styles.drp}>Drop</Text>
            </View>
            <View style={styles.locationDetail}>
              <Text style={styles.drp}>{dropLocation ? dropLocation.name : 'Location'}</Text>
            </View>
          </View>
          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button} onPress={onAccept}>
              <Text>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    position: 'absolute',
    top: height * 0.20,
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.1,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    height: height * 0.5,
    width: width * 0.87,
    borderWidth: 2,
    borderColor: '#2797FA',
    alignItems: 'center',
  },
  timeofreqest: {
    backgroundColor: '#2797FA',
    width: width * 0.3,
    height: height * 0.14,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#fff',
    fontSize: calculateFontSize(30),
    fontWeight: 'bold',
  },
  min: {
    color: '#fff',
    fontSize: calculateFontSize(20),
  },
  locationRow: {
    width: width * 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  locationType: {
    height: height * 0.06,
    borderWidth: 1,
    padding: 5,
    width: width * 0.2,
    marginHorizontal: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  locationDetail: {
    borderWidth: 1,
    padding: 10,
    width: width * 0.4,
    borderRadius: 15,
  },
  drp: {
    color: '#000',
    fontSize: calculateFontSize(20),
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.45,
    marginVertical: height * 0.03,
  },
  button: {
    width: width * 0.2,
    backgroundColor: '#2797FA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default AceeptModal;
