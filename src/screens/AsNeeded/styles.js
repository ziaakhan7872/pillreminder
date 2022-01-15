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
  plusContainer: {
    width: wp(15),
    height: wp(15),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    right: 20,
    opacity: 0.9,
  },
  plus: {
    fontSize: 10,
    color: '#5FBACF',
  },
  needed: {
    color: '#5FBACF',
    fontSize: 6,
    marginTop: hp(2),
    marginBottom: hp(1),
  },
});
export default styles;
