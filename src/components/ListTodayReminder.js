import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';

const ListItems = ({item}) => {
  return (
    <View style={styles.root}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.titleContainer}>
          <ResponsiveText style={styles.title}>{item.title}</ResponsiveText>
          <ResponsiveText style={styles.milegram}>{item.mg}</ResponsiveText>
          <ResponsiveText style={styles.purpose}>{item.purpose}</ResponsiveText>
        </View>
        <Pressable style={styles.menuContainer}>
          <Image
            source={require('../assets/Icons/menuDots.png')}
            style={styles.menu}
          />
        </Pressable>
      </View>
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
