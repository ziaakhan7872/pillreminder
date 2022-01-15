import React, {useState, useEffect} from 'react';
import {FlatList, LogBox, Image, Pressable} from 'react-native';
import styles from './styles';
import {View} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {imageData} from '../../components/dummyData';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const AddMember = ({route, navigation}) => {
  const memberData = useSelector((state) => state.userdataReducer.memberData);
  const [dataPopulate, setdataPopulate] = useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setdataPopulate(dataPopulate.concat(memberData));
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
      </View>
    );
  };

  const addMember = () => {
    return (
      <View style={{marginTop: 50}}>
        {!dataPopulate.length > 0 ? (
          <View>
            <ResponsiveText style={styles.courses}>Add Member</ResponsiveText>
            <View style={styles.withoutMadien}>
              <View style={styles.plusButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MemberScreen')}>
                  <ResponsiveText style={styles.plusStyle}>+</ResponsiveText>
                </TouchableOpacity>
              </View>
              <ResponsiveText style={styles.addMember}>
                Click add to member
              </ResponsiveText>
            </View>
          </View>
        ) : (
          <View style={{height: '100%'}}>
            <ResponsiveText style={styles.courses}>Members</ResponsiveText>
            <FlatList
              data={dataPopulate}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.members}>
                  {item.gender == 'Male' ? (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('HomeScreenData')}>
                      <Image
                        source={require('../../assets/Images/maleIcon.png')}
                        resizeMode="cover"
                        style={styles.membersImag}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('HomeScreenData')}>
                      <Image
                        source={require('../../assets/Images/female_avatar.png')}
                        resizeMode="cover"
                        style={styles.membersImag}
                      />
                    </TouchableOpacity>
                  )}

                  <ResponsiveText style={styles.name}>
                    {item.name}
                  </ResponsiveText>
                </View>
              )}
            />

            <View style={styles.round}>
              <View style={styles.clickAddMember}>
                <Pressable onPress={() => navigation.navigate('MemberScreen')}>
                  <ResponsiveText style={styles.addButton}>+</ResponsiveText>
                </Pressable>
              </View>
              {/* <ResponsiveText style={styles.add}>
                Click add to member
              </ResponsiveText> */}
            </View>
          </View>
        )}
      </View>
    );
  };
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Container style={styles.mainContainer}>
      {drawerIcon()}
      {addMember()}
    </Container>
  );
};

export default AddMember;
