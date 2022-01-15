import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  icon: {
    marginLeft: wp(5),
    marginTop: wp(5),
  },
  medicine: {
    marginVertical: hp(2),
    padding: 10,
    borderRadius: 10,
    width: wp(30),
    backgroundColor: '#5FBACF',
  },
  medicineText: {
    fontSize: 4,
    color: '#fff',
    alignSelf: 'center',
  },
  reminder: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 6,
    color: '#94D1E0',
  },
  root: {
    backgroundColor: '#5FBACF',
    paddingVertical: hp(2),
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2),
    paddingLeft: 10,
  },
  image: {
    flex: 1,
    width: wp(10),
    height: wp(10),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  liststyle: {
    width: wp(10),
    height: hp(15),
    alignSelf: 'center',
  },
  titleContainer: {
    // marginLeft: wp(5),
  },
  deleteContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    marginRight: wp(4),
    // paddingVertical: 5,
    paddingHorizontal: 10,
    paddingBottom: 20,
    elevation: 2,
  },
  delete: {
    //  paddingTop: 30,
    alignSelf: 'center',
    padding: 20,
  },
  title: {
    paddingLeft: wp(2),
    paddingTop: hp(2),
    fontSize: 6,
    color: '#fff',
  },
  milegram: {
    fontSize: 4,
    color: '#fff',

    width: 40,
    alignSelf: 'flex-start',
  },
  break_fast: {
    backgroundColor: 'red',
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  purpose: {
    backgroundColor: '#FEB069',

    color: '#fff',
    paddingVertical: 3,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  purpose1: {
    backgroundColor: '#E3B9DF',
    //width: wp(30),
    color: '#fff',
    paddingVertical: 3,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  breakfastStyle: {
    backgroundColor: '#FEB069',
    width: wp(35),
    paddingVertical: 4,
    marginLeft: wp(2),
    alignSelf: 'center',
    marginHorizontal: wp(2),
    justifyContent: 'center',
    margin: 5,
    paddingHorizontal: 5,
  },
  dinner: {
    backgroundColor: '#E3B9DF',
    width: wp(30),
    color: '#fff',
    paddingVertical: 3,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: wp(2),
  },
  menu: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  menuContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  // reminder: {
  //   paddingLeft: 20,
  //   paddingTop: 20,
  //   paddingBottom: 10,
  //   fontSize: 6,
  //   color: '#94D1E0',
  // },
});
export default styles;
