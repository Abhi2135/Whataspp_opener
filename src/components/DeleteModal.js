import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const DeleteModal = props => {
  return (
    <Modal transparent={true} visible={props.visible}>
      <TouchableWithoutFeedback onPress={props.close}>
        <SafeAreaView style={styles.mainView}>
          <TouchableWithoutFeedback>
            <View style={styles.mainCont}>
              <View style={{marginTop: 10}}>
                <Text
                  allowFontScaling={false}
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto-Bold',
                    fontSize: 16,
                  }}>
                  Do you want to delete this Number?
                </Text>
              </View>
              <View>
                <Text
                  allowFontScaling={false}
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto-Medium',
                    fontSize: 14,
                  }}>
                  {props.deleteItem?.contactNo}
                </Text>
              </View>
              <View style={styles.btnView}>
                <TouchableWithoutFeedback onPress={props.close}>
                  <View style={[styles.btnCont, {backgroundColor: 'white'}]}>
                    <Text
                      allowFontScaling={false}
                      style={[styles.btnTxt, {color: 'limegreen'}]}>
                      Close
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={props.action}>
                  <View style={styles.btnCont}>
                    <Text allowFontScaling={false} style={styles.btnTxt}>
                      Delete
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: '100%',
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCont: {
    backgroundColor: 'white',
    height: 200,
    width: '90%',
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  btnCont: {
    height: 35,
    backgroundColor: 'limegreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'limegreen',
  },
  btnTxt: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: 'white',
  },
});

export default DeleteModal;
