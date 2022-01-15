import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
    elevation: 5,
    marginTop: hp(4),
    marginLeft: wp(4),
  },

  courses: {
    paddingLeft: wp(5),
    paddingTop: hp(2),
    marginBottom: hp(2),
    color: '#94D1E0',
    fontSize: 6,
  },

  withoutMadien: {
    marginTop: hp(5),
    width: wp(60),
    height: hp(45),
    backgroundColor: '#5FBACF',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  plusButton: {
    width: wp(15),
    height: wp(15),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  plusStyle: {
    fontSize: 10,
    color: '#5FBACF',
  },
  addMember: {
    color: '#fff',
    marginTop: hp(3),
  },
  members: {
    flex: 1,
    ///justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: wp(5),
    justifyContent: 'center',
    marginBottom: 10,
  },
  membersImag: {
    width: wp(40),
    height: wp(40),
    resizeMode: 'contain',
  },
  name: {
    width: wp(35),
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 6,
    color: '#5FBACF',
  },
  clickAddMember: {
    backgroundColor: '#2F7889',
    width: wp(15),
    height: wp(15),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    //position: 'absolute',
    //  marginBottom: 50,
  },
  round: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 10,
  },
  addButton: {
    alignSelf: 'center',
    fontSize: 10,
    color: '#fff',
  },
  add: {
    marginTop: 10,
    alignSelf: 'center',
    color: '#5FBACF',
  },
});

export default styles;
