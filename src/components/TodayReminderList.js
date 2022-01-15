import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import ResponsiveText from './ResponsiveText';
import {storeAddReminder} from '../redux/actions/userdataAction';

const TodayReminderList = ({item, index}) => {
  const dispatch = useDispatch();
  const medicineReminder = useSelector(
    (state) => state.userdataReducer.medicineReminder,
  );
  console.log('medicineReminder', medicineReminder);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState('');
  let saveIndex = null;
  let result = medicineReminder.filter((item, index) => {
    if (item.id == data) {
      saveIndex = index;
    }
  });

  const handleDelete = () => {
    medicineReminder.splice(saveIndex, 1);
    dispatch(storeAddReminder(medicineReminder));
  };

  return (
    <View>
      <View style={styles.root}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            //source={medicenData[item.madicentype[0]].image}
            source={require('../assets/Images/5.png')}
          />
          <View style={styles.titleContainer}>
            {item.drug.length > 0 ? (
              <ResponsiveText style={styles.title}>{item.drug}</ResponsiveText>
            ) : (
              'No Data'
            )}

            <View>
              {item.medicineTime.map((v, i) => (
                <View>
                  <ResponsiveText style={styles.breakfastStyle}>
                    {v.bb} {v.ab}
                  </ResponsiveText>
                </View>
              ))}
            </View>
          </View>
          <Pressable
            style={styles.menuContainer}
            onPress={() => {
              setModal(true), setData(item.id);
            }}>
            <Image
              source={require('../assets/Icons/menuDots.png')}
              style={styles.menu}
            />
          </Pressable>
        </View>
      </View>
      {modal ? (
        <View style={styles.deleteContainer}>
          <TouchableWithoutFeedback
            style={{width: 100, height: 100}}
            onPress={() => setModal(false)}>
            <TouchableOpacity onPress={() => handleDelete()}>
              <ResponsiveText style={styles.delete}>Delete</ResponsiveText>
            </TouchableOpacity>
          </TouchableWithoutFeedback>
        </View>
      ) : null}
    </View>
  );
};
export default TodayReminderList;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#5FBACF',
    paddingVertical: hp(4),
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2),
    paddingLeft: 30,
  },
  image: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },
  titleContainer: {
    // marginLeft: wp(5),
  },
  deleteContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    marginRight: wp(4),
    padding: 5,
    elevation: 2,
  },
  delete: {
    paddingTop: 30,
    alignSelf: 'center',
  },
  title: {
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
    margin: 5,
    width: wp(40),
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 4.5,
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
  reminder: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 6,
    color: '#94D1E0',
  },
});
