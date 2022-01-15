import React, {useState, useRef, useEffect, useFocusEffect} from 'react';
import styles from './styles';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  useWindowDimensions,
  Pressable,
  BackHandler,
  Alert,
} from 'react-native';
import {AdMobBanner} from 'react-native-admob';
import {Container, ResponsiveText, Button, medicenData} from '../../components';
import {DrawerActions, CommonActions, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreenData = ({navigation}) => {
  const userData = useSelector((state) => state.userdataReducer);
  const getMadicen = useSelector((state) => state.userdataReducer.addMadicen);
  const getReminder = useSelector(
    (state) => state.userdataReducer.medicineReminder,
  );
  const [name, setName] = useState(
    userData.userData.name ? userData.userData.name : null,
  );
  const [age, setAge] = useState(userData.userData.age);
  const windowWidth = useWindowDimensions().width;
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const [findDay, setfindDay] = useState([]);
  const [reminderArray, setReminderArray] = useState([]);
  const route = useRoute();
  console.log('route', route.name);
  let date;
  let startDate;
  let endDate;
  let drug;
  let madicentype;
  let dayName;
  let day;
  // let findDay;

  const gettodayDate = () => {
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var d = new Date();
    day = days[d.getDay()];
    let getday = getReminder.filter((item) => {
      let resultDate = new Date(item.selectedStartDate);
      let resultDate1 = days[resultDate.getDay()];
      if (resultDate1 == day) {
        setfindDay(day);
      }
    });
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to close app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      gettodayDate();
    }, 2000);
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setWeeklyData();
    });
    return unsubscribe;
  }, [navigation]);

  const setWeeklyData = () => {
    let arrSteps = [];
    getReminder.map((item) => {
      date = new Date(item.frequency);
      startDate = new Date(item.selectedStartDate);
      endDate = new Date(item.selectedEndDate);
      drug = item.drug;
      dayName = item.dayName;
      madicentype = item.madicentype;
      arrSteps.push({
        time: date.toLocaleTimeString(),
        startReminderDate: startDate.toLocaleDateString(),
        endReminderDate: endDate.toLocaleDateString(),
        drug: drug,
        madicentype: madicentype,
        dayName: dayName,
      });

      setReminderArray([...reminderArray.concat(arrSteps)]);
    });
  };
  const onswap = () => {
    // navigation.navigate('AddMadicen');
    navigation.navigate('UserProfile');
  };
  const onSubmit = (item) => {
    navigation.navigate('AddMadicen', {item: item});
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
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Button
              title={'Go to Profile'}
              onPress={onswap}
              btnContainer={styles.swapButton}
              fontColor={'#fff'}
              fontSize={16}
            />
            {/* <Button
              title={'Change Member'}
              onPress={() => navigation.navigate('MemberScreen')}
              btnContainer={styles.swapButton}
              fontColor={'#fff'}
              fontSize={12}
            /> */}
          </View>
        </View>
      </View>
    );
  };

  const carosel = () => {
    return (
      <View>
        <ResponsiveText style={styles.courses}>Ongoing Courses</ResponsiveText>
        {getMadicen.length > 0 ? (
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={getMadicen}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View style={styles.caroselContainer}>
                  <ResponsiveText style={styles.tabletName}>
                    {item.drug}
                  </ResponsiveText>
                  <Image
                    style={[styles.caroselImage, {width: windowWidth - 40}]}
                    source={medicenData[item.madicentype].image}
                    resizeMode="center"
                  />
                  <ResponsiveText style={{color: '#fff'}}>
                    {item.mgpotency}
                  </ResponsiveText>
                  <View style={styles.cardBottom} />
                  <View style={styles.editContainer}>
                    <View style={styles.editButton}>
                      <TouchableOpacity onPress={() => onSubmit(item)}>
                        <ResponsiveText style={styles.tapedit}>
                          Tap to edit
                        </ResponsiveText>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              snapToInterval={windowWidth - 30}
              snapToAlignment={'center'}
              decelerationRate={'fast'}
              viewabilityConfig={viewConfigRef.current}
            />
            <View>
              <View style={styles.addnewItem}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddMadicen')}>
                  <ResponsiveText style={styles.plusStyle1}>+</ResponsiveText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.withoutMadien}>
            <View style={{width: '80%'}}>
              <TouchableOpacity
                style={styles.plusButton}
                onPress={() => navigation.navigate('AddMadicen')}>
                <ResponsiveText style={styles.plusStyle}>+</ResponsiveText>
              </TouchableOpacity>
              <ResponsiveText style={{color: '#fff', paddingTop: 20}}>
                Add medicine to see your course
              </ResponsiveText>
            </View>
          </View>
        )}
      </View>
    );
  };

  const reminders = () => {
    return getReminder.length > 0 ? (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '80%'}}>
          <ResponsiveText style={styles.courses}>Reminders</ResponsiveText>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={reminderArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              //  console.log('item====>>>', item.madicentype[index]),
              <View style={styles.list}>
                <ResponsiveText style={styles.todayColor}>
                  {item.dayName == findDay ? 'Today' : item.dayName}
                </ResponsiveText>
                <Pressable
                  onPress={() => {
                    item.dayName == findDay
                      ? navigation.navigate('TodayReminder')
                      : null;
                  }}
                  style={
                    item.dayName == findDay
                      ? styles.list1
                      : styles.roundedCircle
                  }>
                  {item.madicentype.map((m) => (
                    <Image
                      // source={medicenData[item.madicentype[0]].image}
                      source={medicenData[m].image}
                      resizeMode="contain"
                      style={styles.tablet2}
                    />
                  ))}
                  {/* <Image
                    // source={medicenData[item.madicentype[1]].image}
                    source={require('../../assets/Images/5.png')}
                    resizeMode="contain"
                    style={styles.tablet2}
                  /> */}
                </Pressable>
              </View>
            )}
          />
          {/* <AdMobBanner
            adSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3940256099942544/2934735716"
          /> */}
        </View>

        <View style={styles.addReminder}>
          <Pressable onPress={() => navigation.navigate('AddReminder')}>
            <ResponsiveText style={styles.addButton}>+</ResponsiveText>
          </Pressable>
        </View>
      </View>
    ) : (
      <View>
        <ResponsiveText style={styles.courses}>Reminders</ResponsiveText>

        {getMadicen.length <= 0 ? (
          <View>
            <AdMobBanner
              adSize="smartBannerLandscape"
              adUnitID="ca-app-pub-6212540896507732/6297235560"
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.plusContainer}
            onPress={() => navigation.navigate('AddReminder')}>
            <ResponsiveText style={styles.plusText}>+</ResponsiveText>
          </TouchableOpacity>
        )}

        {/* <AdMobBanner
            adSize="smartBannerLandscape"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
          /> */}
      </View>
    );
  };
  return (
    <Container style={styles.mainContainer}>
      {drawerIcon()}
      <ScrollView>
        {editprofileScetion()}
        {carosel()}
        {reminders()}
      </ScrollView>
    </Container>
  );
};

export default HomeScreenData;
