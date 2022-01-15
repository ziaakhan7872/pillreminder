import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  icon: {
    marginLeft: wp(4),
    marginTop: hp(4),
    marginVertical: hp(1),
  },
  reports: {
    fontSize: 6,
    color: '#5FBACF',
  },
  reportView: {
    flex: 1,
    paddingLeft: wp(3),
  },
  reportView1: {
    paddingLeft: wp(3),
    marginTop: hp(2),
  },
  addReport: {
    marginTop: hp(2),
    width: wp(40),
    height: wp(60),
    backgroundColor: '#5FBACF',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    fontSize: 10,
    color: '#5FBACF',
  },
  addButton1: {
    fontSize: 10,
    color: '#fff',
  },
  addButtonView: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  addButtonView1: {
    width: 50,
    height: 50,
    backgroundColor: '#2F7889',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  presView: {
    marginTop: hp(1),
    marginBottom: 10,
  },
  clickAdd: {
    color: '#fff',
    marginTop: hp(2),
    fontSize: 3.5,
  },
  clickAdd1: {
    color: '#5FBACF',
    marginTop: hp(2),
    fontSize: 3.5,
    alignSelf: 'center',
  },
});

export default styles;
