import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useSelector} from 'react-redux';
import {DrawerActions, CommonActions} from '@react-navigation/native';

const Splash = ({navigation}) => {
  const addMadicen = useSelector((state) => state.userdataReducer.addMadicen);

  useEffect(() => {
    const timer = setTimeout(() => {
      {
        if (addMadicen.length > 0) {
          navigation.navigate('AdminStack');
        } else {
          navigation.navigate('UserDetail');
        }
      }

      // navigation.navigate('HomeScreenData');
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={[
          '#F2B378',
          '#D3AE7E',
          '#C1AB82',
          '#98A58D',
          '#85A392',
          '#619E9C',
        ]}
        style={styles.linearGradient}>
        <Image
          source={require('../../assets/Icons/splash.png')}
          style={styles.image}
        />
      </LinearGradient>
    </View>
  );
};

export default Splash;
