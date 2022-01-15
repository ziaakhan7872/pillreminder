import React, {useState, useRef} from 'react';
import styles from './styles';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import {Container, ResponsiveText, Button} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const userData = useSelector((state) => state.userdataReducer);
  const getMadicen = useSelector((state) => state.userdataReducer);
  const [name, setName] = useState(userData.userData.name);
  const [age, setAge] = useState(userData.userData.age);
  const [toggle, setToggle] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  let test = [0, 0, 0, 0, 0];

  const onSubmit = () => {
    navigation.navigate('AddMadicen');
  };
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

  const editprofileScetion = () => {
    return (
      <View style={styles.editMainContainer}>
        <View style={styles.imageContainer}>
          {userData.userData.gender == 'Male' ? (
            <Image
              source={require('../../assets/Images/maleIcon.png')}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../../assets/Images/female_avatar.png')}
              style={styles.image}
            />
          )}

          <ResponsiveText style={styles.nameText}>{name}</ResponsiveText>
          <ResponsiveText style={styles.ageText}>Age {age}</ResponsiveText>

          <Button
            title={'Edit'}
            onPress={onSubmit}
            btnContainer={styles.edit}
            fontColor={'#fff'}
            fontSize={15}
          />
        </View>
      </View>
    );
  };
  const carosel = () => {
    return (
      <View>
        <ResponsiveText style={styles.courses}>Ongoing Courses</ResponsiveText>
        <View style={styles.withoutMadien}>
          <View style={styles.plusButton}>
            <TouchableOpacity onPress={() => navigation.navigate('AddMadicen')}>
              <ResponsiveText style={styles.plusStyle}>+</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const reminders = () => {
    return toggle ? (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '80%'}}>
          <ResponsiveText style={styles.courses}>Reminders</ResponsiveText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {test.map((item, index) => {
              return (
                <View style={styles.list}>
                  <ResponsiveText style={styles.todayColor}>
                    Today
                  </ResponsiveText>
                  <Pressable style={styles.tabletList}>
                    <Image
                      source={require('../../assets/Images/2.png')}
                      resizeMode="contain"
                      style={styles.tablet2}
                    />
                    <Image
                      source={require('../../assets/Images/tablet.png')}
                      resizeMode="contain"
                      style={styles.tablet}
                    />
                  </Pressable>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.addReminder}>
          <Pressable onPress={() => navigation.navigate('AddMadicen')}>
            <ResponsiveText style={styles.addButton}>+</ResponsiveText>
          </Pressable>
        </View>
      </View>
    ) : (
      <View>
        <ResponsiveText style={styles.courses}>Reminders</ResponsiveText>
        <TouchableOpacity
          style={styles.plusContainer}
          onPress={() => navigation.navigate('AddReminder')}>
          <ResponsiveText style={styles.plusText}>+</ResponsiveText>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Container style={styles.mainContainer}>
      <ScrollView>
        {/* Drawer Icon */}
        {drawerIcon()}
        {editprofileScetion()}
        {/* Carosel  */}
        {carosel()}
        {reminders()}
      </ScrollView>
    </Container>
  );
};

export default Home;
