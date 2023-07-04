import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  View,
  Linking,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../../state/action';

import styles from './styles';

import HistoryIcon from '../../../assets/svgIcons/history-icon.svg';

const Home = props => {
  const [whatsappNo, setWhatsappNo] = useState('');
  const [msg, setMsg] = useState('');

  const dispatch = useDispatch();
  const storedData = useSelector(state => state.appReducer.data);

  const openWhatsappByNo = () => {
    let message = 'Hii';
    if (msg !== '') {
      message = msg;
    }
    const payload = {
      contactNo: whatsappNo,
      msg: message,
    };
    if (whatsappNo && whatsappNo.length === 10) {
      let url = 'whatsapp://send?text=' + message + '&phone=91' + whatsappNo;
      Linking.openURL(url)
        .then(data => {
          dispatch(addData(payload));
          setWhatsappNo('');
          setMsg('');
          console.log('WhatsApp Opened successfully ' + data); //<---Success
        })
        .catch(() => {
          alert('Make sure WhatsApp installed on your device'); //<---Error
        });
    } else {
      Alert.alert('Please Enter 10 digit No');
    }
  };

  const navigateHistory = () => {
    props.navigation.navigate('HISTORY');
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Hello</Text>
        <TouchableWithoutFeedback onPress={navigateHistory}>
          <HistoryIcon fill="white" height="30" width="30" />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.mainCont}>
        <TextInput
          style={styles.input}
          onChangeText={setWhatsappNo}
          value={whatsappNo}
          maxLength={10}
          placeholder="Enter WhatsApp No"
          keyboardType="numeric"
          placeholderTextColor="#808080"
        />
        <TextInput
          style={styles.input}
          onChangeText={setMsg}
          value={msg}
          placeholder="Enter Message"
          placeholderTextColor="#808080"
        />
        <TouchableWithoutFeedback onPress={openWhatsappByNo}>
          <View style={styles.btnCont}>
            <Text style={styles.btnTxt}>Go to WhatsApp</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.footer}>
        <Text allowFontScaling={false} style={styles.footerText}>
          {'\u00A9'}This is footer
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
