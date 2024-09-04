import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BLACK, THEME_COLOR, WHITE} from '../../../utils/colors';
import BackHeader from '../../../components/BackHeader/BackHeader';
import {CardField, useStripe, createToken} from '@stripe/stripe-react-native';
import Button from '../../../components/Button/Button';
import {PoppinsBold, PoppinsRegular} from '../../../utils/font';

const {height, width} = Dimensions.get('screen');

const Payment = ({navigation}) => {
  const [cardinfo, setcardinfo] = useState(null);
  const [isLoding, setisLoding] = useState(false);

  const handlePayment = async cardDetails => {
    console.log('my card', cardDetails);
    if (cardDetails.complete) {
      setcardinfo(cardDetails);
    } else {
      setcardinfo(null);
    }
  };
  const Done = async () => {
    setisLoding(true);
    if (!!cardinfo) {
      try {
        const {error, token} = await createToken({
          ...cardinfo,
          type: 'Card',
        });

        Paymeny(token.id);

        if (error) {
          console.log('create Token error', error);
          setisLoding(false);
        }
      } catch (error) {
        setisLoding(false);
        console.log('errrrrrrrror', error);
      }
    }
  };
  const Paymeny = token => {
    console.log('token stripe', token);
    navigation.navigate('PaymentSuccess');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <BackHeader
        icon={true}
        onPress={() => navigation.goBack()}
        style={{backgroundColor: WHITE}}
      />
      <View style={styles.main}>
        <Text style={styles.text}>
          Please enter your card details to pay for this ride.
        </Text>
        <View style={{alignItems: 'center'}}>
          <CardField
            postalCodeEnabled={true}
            placeholders={{
              number: '1234 1234 1234 1234',
            }}
            cardStyle={styles.cardStyle}
            style={styles.cardInputStyle}
            onCardChange={cardDetails => {
              handlePayment(cardDetails);
            }}
          />
          <View style={styles.HUM_buttn}>
            <Button
              title="Pay Now"
              style={[
                styles.acceptBtn,
                {
                  backgroundColor: !cardinfo ? '#C0C0C0' : THEME_COLOR,
                },
              ]}
              textStyle={styles.acceptBtnText}
              onPress={Done}
              disabled={!cardinfo}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

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
  HUM_buttn: {
    height: height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    // width: '77%'
  },
  acceptBtn: {
    // backgroundColor: THEME_COLOR,
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  acceptBtnText: {
    fontFamily: PoppinsRegular,
    fontSize: 14,
    color: WHITE,
    fontWeight: '700',
    textTransform: 'uppercase',
    width: '100%',
  },
  text: {
    color: BLACK,
    fontFamily: PoppinsRegular,
    fontSize: 14,
    textAlign: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  cardStyle: {
    backgroundColor: THEME_COLOR,
    textColor: WHITE,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: THEME_COLOR,
    placeholderColor: WHITE,
    width: '100%',
    cursorColor: WHITE,
  },
  cardInputStyle: {
    width: '100%',
    height: 80,
    marginVertical: 40,
  },
});
