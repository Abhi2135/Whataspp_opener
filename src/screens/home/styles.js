import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: 'limegreen',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerTxt: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  btnCont: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'limegreen',
    marginVertical: 10,
    width: '65%',
  },
  btnTxt: {
    textAlign: 'center',
    color: 'limegreen',
  },
  mainCont: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontFamily: 'Roboto-Regular',
    color: '#808080',
  },
  input: {
    height: 40,
    width: '85%',
    marginHorizontal: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: 'limegreen',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
});

export default styles;
