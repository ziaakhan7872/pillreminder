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
  editMainContainer: {
    backgroundColor: '#BAE9F4',
    paddingBottom: 30,
    borderBottomLeftRadius: wp(10),
    borderBottomEndRadius: wp(10),
    elevation: 5,
    //height: hp(30),
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp(25),
    height: wp(25),
  },
  formulaText: {
    padding: 20,
    fontSize: 5,
    color: '#82AEC0',
  },
  input: {
    backgroundColor: '#ECECEC',
    width: wp(90),
    height: hp(8),
    borderRadius: 10,
  },
  inputText: {
    alignSelf: 'center',
  },

  plusButton: {
    fontSize: 10,
    alignSelf: 'center',
    color: '#fff',
  },
  plusContainer: {
    justifyContent: 'center',
    backgroundColor: 'red',
    width: wp(10),
    height: wp(10),
    borderRadius: 60,
  },
  tagView: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 20,
  },
  type: {
    fontSize: 6,
    color: '#82AEC0',
    marginBottom: 10,
  },
  tablets: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
  },
  cap1: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#60D665',
    width: wp(15),
    height: wp(15),
  },
  cap2: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5FBACF',
    width: wp(15),
    height: wp(15),
  },
  cap3: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C4C4C4',
    width: wp(15),
    height: wp(15),
  },
  cap4: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A4ECF2',
    width: wp(15),
    height: wp(15),
  },
  potency: {
    color: '#5FBACF',
    fontSize: 6,
  },
  btnStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  mgInput: {
    backgroundColor: '#fafafa',
    borderRadius: 5,
    paddingLeft: wp(3),
    width: wp(40),
    borderColor: '#5FBACF',
    borderWidth: 1,
  },
  needed: {
    backgroundColor: '#5FBACF',
    marginTop: hp(2),
    width: wp(30),
    paddingVertical: hp(2.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 1,
    elevation: 3,
    position: 'absolute',
    right: 0,
    borderColor: 'gray',
    borderWidth: 1,
  },
  addNote: {
    fontSize: 6,
    color: '#5FBACF',
  },
  noteContainer: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  noteInput: {
    backgroundColor: '#ECECEC',
    width: wp(90),
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  saveBtn: {
    width: wp(35),
    backgroundColor: '#5FBACF',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    elevation: 3,
  },
  dinner: {
    marginLeft: wp(5),
  },
  savedinner: {
    width: wp(35),
    height: 40,
    backgroundColor: '#E3B9DF',
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 10,
    color: '#fff',
  },
  addButton: {
    width: wp(12),
    height: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5FBACF',
    borderRadius: 50,
    marginLeft: wp(5),
  },
  duration: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'contain',
  },
  calendar: {
    alignSelf: 'center',
    marginLeft: wp(1),
    color: '#5FBACF',
  },
  calendarView: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    paddingHorizontal: wp(3),
    width: wp(30),
    paddingVertical: 2,
    borderRadius: 5,
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  reminderbtn: {
    width: wp(35),
    height: 40,
    backgroundColor: '#5FBACF',
    alignSelf: 'center',
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
  listView: {
    height: wp(19),
    width: wp(19),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5FBACF',
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default styles;
