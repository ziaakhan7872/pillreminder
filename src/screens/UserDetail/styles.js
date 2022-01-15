import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gradient: {
    flex: 1,
    borderTopRightRadius: wp(90),
    marginTop: hp(1),
  },
  radio: {
    marginTop: hp(12),
    justifyContent: 'center',
    marginRight: wp(10),
    flexDirection: 'row',
  },
  femaleCheck: {
    marginLeft: wp(5),
  },
  male: {
    alignSelf: 'center',
    marginLeft: wp(2),
    color: '#fff',
    fontSize: 18,
  },
  female: {
    alignSelf: 'center',
    marginLeft: wp(2),
    color: '#fff',
    fontSize: 18,
  },
  input: {
    padding: 4,
    backgroundColor: '#fff',
  },
  inputOptional: {
    padding: 4,
    backgroundColor: '#fff',
    textAlign: 'left',
  },

  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 5,
  },
  inputContainer: {
    marginTop: hp(4),
  },
  nameContainer: {
    marginTop: hp(2),
  },
  saveButton: {
    marginTop: hp(5),
    width: wp(30),
    backgroundColor: '#F3B399',
    alignSelf: 'center',
    elevation: 1,
    color: '#fff',
  },
});

export default styles;
