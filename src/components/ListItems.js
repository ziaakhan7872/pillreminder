import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';
import {medicenData} from './dummyData';

const ListItems = ({item}) => {
  return (
    <View>
      {item.asneede ? (
        <View style={styles.root}>
          <Image
            style={styles.image}
            source={medicenData[item.madicentype].image}
          />
          <View style={styles.titleContainer}>
            <ResponsiveText style={styles.title}>{item.drug}</ResponsiveText>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <ResponsiveText style={styles.milegram}>
                {item.mgpotency}
              </ResponsiveText>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <ResponsiveText style={styles.purpose}>
                {item.asneede}
              </ResponsiveText>
            </View>
          </View>
          <Pressable style={styles.menuContainer}>
            {/* <Image
              source={require('../assets/Icons/menuDots.png')}
              style={styles.menu}
            /> */}
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};
export default ListItems;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#5FBACF',
    paddingVertical: hp(4),
    borderRadius: 10,
    marginHorizontal: wp(2),
    marginVertical: hp(2),
    paddingLeft: 30,
    flexDirection: 'row',
  },
  image: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },
  titleContainer: {
    marginLeft: wp(5),
  },
  title: {
    fontSize: 6,
    color: '#fff',
  },
  milegram: {
    fontSize: 4,
    color: '#fff',
  },
  purpose: {
    backgroundColor: '#FEB069',
    width: wp(30),
    color: '#fff',
    paddingVertical: 3,
    textAlign: 'center',
    marginTop: 10,
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
});
