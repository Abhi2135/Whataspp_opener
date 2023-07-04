import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: 'limegreen',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  histCont: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  txt: {
    fontFamily: 'Roboto-Medium',
    color: '#000000',
  },
  msg: {
    fontFamily: 'Roboto-regular',
    color: '#808080',
  },
});

export default styles;
