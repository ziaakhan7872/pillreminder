import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AddReports = ({item}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: item.fileUri}} />
    </View>
  );
};
export default AddReports;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#5FBACF',
    paddingVertical: hp(4),
    borderRadius: 10,
    paddingHorizontal: wp(4),
    marginHorizontal: wp(2),
    marginVertical: hp(2),
  },
  image: {
    width: wp(30),
    height: wp(30),
    resizeMode: 'contain',
  },
});
