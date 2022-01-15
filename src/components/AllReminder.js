import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import ResponsiveText from './ResponsiveText';
import {medicenData} from './dummyData';

const AllReminder = ({item, index}) => {
  console.log(`item from All remider`, item);
  var endDate = new Date(item.endReminderDate);
  var startDate = new Date(item.startReminderDate);
  var diffDays = endDate.getDate() - startDate.getDate();
  var breakfast = item.medicineTime[0] ? item.medicineTime[0] : 'No Data';
  var breakfast = item.medicineTime[0] ? item.medicineTime[0] : 'No Data';

  return (
    <View>
      <View style={styles.root}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 60}}>
            <Image
              style={styles.image}
              //source={medicenData[item.madicentype[0]].image}
              source={require('../assets/Images/5.png')}
            />
          </View>

          <View>
            <ResponsiveText style={styles.title}>{item.dayName}</ResponsiveText>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '60%',
              }}>
              <ResponsiveText style={styles.milegram}>
                {diffDays} reminders
              </ResponsiveText>
              <ResponsiveText style={styles.milegram}>
                {item.startReminderDate}
              </ResponsiveText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '60%',
              }}>
              <ResponsiveText style={styles.breakfast}>
                {breakfast}
              </ResponsiveText>
              <ResponsiveText style={styles.breakfast1}>
                {breakfast}
              </ResponsiveText>
            </View>
          </View>

          <Pressable style={styles.menuContainer}>
            <Image
              source={require('../assets/Icons/menuDots.png')}
              style={styles.menu}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default AllReminder;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#5FBACF',
    paddingVertical: hp(4),
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2),
    //paddingLeft: 30,
  },
  image: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },
  titleContainer: {
    //  marginLeft: wp(5),
  },
  title: {
    fontSize: 6,
    color: '#fff',
    marginLeft: wp(5),
  },
  milegram: {
    fontSize: 4,
    color: '#fff',
    marginLeft: wp(5),
  },
  breakfast: {
    marginTop: 2,
    backgroundColor: '#FEB069',
    fontSize: 4,
    color: '#fff',

    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
  },
  breakfast1: {
    marginTop: 2,
    backgroundColor: '#E3B9DF',
    fontSize: 4,
    color: '#fff',
    marginLeft: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
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
