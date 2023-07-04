import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Linking,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

import BackIcon from '../../../assets/svgIcons/left_arrow.svg';

import DeleteModal from '../../components/DeleteModal';
import {clearAllData, deleteData} from '../../state/action';

const History = props => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemindex, setDeleteItemIndex] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const dispatch = useDispatch();
  const storedData = useSelector(state => state.appReducer.data);

  const openWhatsapp = item => {
    console.log(item);
    let url = 'whatsapp://send?text=' + item.msg + '&phone=91' + item.contactNo;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened successfully ' + data); //<---Success
      })
      .catch(() => {
        alert('Make sure WhatsApp installed on your device'); //<---Error
      });
  };

  const deleteHist = () => {
    let newData = storedData;
    newData.splice(deleteItemindex, 1);
    dispatch(deleteData(newData));
    hideDeleteModal();
  };

  const clearData = () => {
    dispatch(clearAllData());
  };

  const openDeleteModal = index => {
    setDeleteItem(storedData[index]);
    setDeleteItemIndex(index);
    setShowDeleteModal(true);
  };

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const getData = (item, index) => {
    return (
      <Pressable
        onPress={() => openWhatsapp(item)}
        onLongPress={() => openDeleteModal(index)}
        delayLongPress={500}>
        <View style={styles.histCont}>
          <Text allowFontScaling={false} style={styles.txt}>
            {item.contactNo}
          </Text>
          <Text allowFontScaling={false} style={styles.msg}>
            {item.msg}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
            <BackIcon width="26" height="26" />
          </TouchableWithoutFeedback>
          <Text style={styles.headerTxt}>History</Text>
        </View>
        <TouchableWithoutFeedback onPress={clearData}>
          <View>
            <Text style={[styles.headerTxt, {fontSize: 14}]}>Clear All</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={[...storedData]}
        renderItem={({item, index}) => getData(item, index)}
      />
      {showDeleteModal ? (
        <DeleteModal
          visible={showDeleteModal}
          close={hideDeleteModal}
          action={deleteHist}
          deleteItem={deleteItem}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default History;
