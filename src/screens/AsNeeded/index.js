import React, {useState} from 'react';
import styles from './styles';
import {View, FlatList} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import ListItems from '../../components/ListItems';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AdMobBanner} from 'react-native-admob';

import {useSelector} from 'react-redux';
const AsNeeded = ({navigation}) => {
  const getMadicen = useSelector((state) => state.userdataReducer.addMadicen);
  const [dataPopulate, setdataPopulate] = useState([]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setdataPopulate(dataPopulate.concat(getMadicen));
    });
    return unsubscribe;
  }, [navigation]);
  const drawerIcon = () => {
    return (
      <View style={styles.icon}>
        <Icon
          name="dots-three-vertical"
          size={20}
          color="#000"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <ResponsiveText style={styles.needed}>As Needed</ResponsiveText>
      </View>
    );
  };

  const asNeeded = () => {
    return (
      <FlatList
        data={dataPopulate}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItems item={item} />}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const addMember = () => {
    return (
      <View style={styles.plusContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddMadicen')}>
          <ResponsiveText style={styles.plus}>+</ResponsiveText>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Container style={styles.mainContainer}>
      {drawerIcon()}
      {asNeeded()}
      {addMember()}
      <View style={{bottom: 0}}>
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="ca-app-pub-6212540896507732/6297235560"
        />
      </View>
    </Container>
  );
};

export default AsNeeded;
