import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  LogBox,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import {
  Container,
  ResponsiveText,
  Button,
  medicenData,
  FadeInView,
} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Calendar from '../../components/Calendar';
import TimeShedule from '../../components/TimeShedule';
import {useDispatch, useSelector} from 'react-redux';
import {storeAddReminder} from '../../../src/redux/actions/userdataAction';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification, {Importance} from 'react-native-push-notification';
import {AdMobInterstitial} from 'react-native-admob';

const AddReminder = ({navigation}) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [calendarVisible, setcalendarVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(Date.now());
  const [selectedEndDate, setSelectedEndDate] = useState(Date.now());
  const [timeShedule, settimeShedule] = useState(false);
  const [medicineTime, setMedicineTime] = useState([]);
  const [frequencyTime, setfrequencyTime] = useState(new Date(Date.now()));
  const [selectedItems, setSelectedItems] = useState([]);
  const [madicentype, setMadicentype] = useState([]);
  const [dayName, setDayname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showTime, setShowTime] = useState('');
  const [findIndex, setfindIndex] = useState([]);
  const [medicineArray, setmedicineArray] = useState([]);

  const medicineReminder = useSelector(
    (state) => state.userdataReducer.medicineReminder,
  );
  const getMadicen = useSelector((state) => state.userdataReducer.addMadicen);

  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let daysName;
  var d = new Date(selectedStartDate);
  daysName = days[d.getDay()];
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
    findIndexImage(selectedItems);
  };

  const findIndexImage = (selectedItems) => {
    console.log(`selectedItems`, selectedItems);
    let result = getMadicen.filter((item, index) => {
      if (selectedItems.includes(item.id)) {
        setfindIndex(findIndex.concat(item.madicentype));
        setmedicineArray(medicineArray.concat(item.drug));
      }
    });
  };
  useEffect(() => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-6212540896507732/8946615484');

    AdMobInterstitial.requestAd().catch((error) => console.log('Hi', error));
    AdMobInterstitial.removeAllListeners();

    AdMobInterstitial.showAd().catch((error) => console.log('Hello', error));
  }, []);
  useEffect(() => {
    // findIndexImage();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  let late = new Date();
  late.setDate(frequencyTime.getDate());
  late.setHours(frequencyTime.getHours(), frequencyTime.getMinutes());
  const pushNotify = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'My channel',
        channelDescription: 'A channel to categorise your notifications',
        playSound: true,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
        soundName: 'default',
      },
      (created) => console.log(`createChannel returned---> '${created}'`),
    );

    PushNotification.localNotificationSchedule({
      id: 111,
      channelId: 'channel-id',
      title: 'PillReminder',
      message: "It's time to take your medicine",
      date: late,
      allowWhileIdle: true,
      repeatType: 'minutes',
    });
  };
  const addReminder = () => {
    if (selectedItems.length === 0) {
      setErrorMessage('Please select medicen !');
    } else {
      setErrorMessage('');
      medicineReminder.push({
        id: Math.random(),
        madicentype: findIndex,
        drug: medicineArray,
        medicineTime: medicineTime,
        selectedStartDate: selectedStartDate,
        selectedEndDate: selectedEndDate,
        frequency: frequencyTime,
        dayName: daysName,
      });
      pushNotify();
      dispatch(storeAddReminder(medicineReminder));
      navigation.navigate('HomeScreenData');
    }
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
          <Image
            source={require('../../assets/Images/Group27.png')}
            style={styles.image}
          />
        </View>
        <FadeInView>
          <ResponsiveText
            style={{
              color: errorMessage.length ? 'red' : 'transparent',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 5,
            }}>
            {errorMessage.length ? errorMessage : null}
          </ResponsiveText>
        </FadeInView>
      </View>
    );
  };

  const drugformulaName = () => {
    return (
      <View style={{flex: 1}}>
        <ResponsiveText style={styles.formulaText}>
          Drug formula/Name
        </ResponsiveText>
        <ScrollView style={styles.multiselect}>
          <MultiSelect
            hideTags
            items={getMadicen}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Medicine"
            searchInputPlaceholderText="Search Medicine..."
            onChangeInput={(text) => console.log('text======>', text)}
            altFontFamily="ProximaNova-Light"
            tagRemoveIconColor="#000"
            tagBorderColor="#000"
            tagTextColor="#000"
            selectedItemTextColor="#000"
            selectedItemIconColor="#000"
            itemTextColor="#000"
            displayKey="drug"
            searchInputStyle={{color: '#000'}}
            submitButtonColor="#5FBACF"
            submitButtonText="Submit"
            flatListProps={{nestedScrollEnabled: true}}
          />
        </ScrollView>
      </View>
    );
  };
  const type = () => {
    let chars = findIndex;
    let uniqueChars = [...new Set(chars)];

    return (
      <View style={{padding: 20}}>
        <ResponsiveText style={styles.type}>Type</ResponsiveText>
        <View style={styles.list}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={medicenData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View>
                {uniqueChars.map((v, i) => (
                  <View>
                    {item.id == v ? (
                      <Image
                        style={{
                          resizeMode: 'contain',
                          height: 50,
                          width: 50,
                          backgroundColor: '#fff',
                          margin: 5,
                          borderColor: '#5FBACF',
                          borderWidth: 2,
                        }}
                        source={item.image}
                        // source={medicenData[v].image}
                      />
                    ) : null}
                  </View>
                ))}
              </View>
            )}
          />
        </View>
      </View>
    );
  };

  const potency = () => {
    return (
      <View style={{padding: 20}}>
        <ResponsiveText style={styles.potency}>Time & Shedule</ResponsiveText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={medicineTime}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={{flex: 1, alignContent: 'center'}}>
              <ResponsiveText style={styles.breakfastStyle}>
                {item.bb} {item.ab}
              </ResponsiveText>
              {/* <ResponsiveText style={styles.breakfastStyle}></ResponsiveText> */}
            </View>
          )}
        />

        <View style={styles.addButton}>
          <Pressable
            hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}
            onPress={() => settimeShedule(true)}>
            <ResponsiveText style={styles.addButtonText}>+</ResponsiveText>
          </Pressable>
        </View>

        <TimeShedule
          medicineTime={medicineTime}
          setMedicineTime={setMedicineTime}
          timeShedule={timeShedule}
          CloseModal={() => settimeShedule(false)}
        />
      </View>
    );
  };

  ///TODO:
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    if (selectedDate == undefined) {
      selectedDate = new Date(Date.now());
    }
    let hours = selectedDate.getHours();
    let min = selectedDate.getMinutes();
    let time =
      hours > 12
        ? hours - 12 + ':' + min + ' ' + 'pm'
        : hours + ':' + min + ' ' + 'am';

    setShowTime(time);
    setfrequencyTime(currentDate);
  };

  const addNote = () => {
    let showDate = new Date(selectedStartDate);
    let show_Date = showDate.toLocaleDateString();
    let findTime = new Date();
    let find_time = findTime.toLocaleTimeString();

    return (
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ResponsiveText style={styles.potency}>Duration</ResponsiveText>
          <ResponsiveText style={styles.potency}>Frequency</ResponsiveText>
        </View>
        <View style={styles.durationContainer}>
          <Calendar
            calendarVisible={calendarVisible}
            selectedStartDate={selectedStartDate}
            setSelectedStartDate={setSelectedStartDate}
            selectedEndDate={selectedEndDate}
            setSelectedEndDate={setSelectedEndDate}
            CloseModal={() => setcalendarVisible(false)}
          />
          <Pressable
            style={styles.calendarView}
            onPress={() => setcalendarVisible(true)}>
            <Image
              source={require('../../assets/Images/uim_calender.png')}
              style={styles.duration}
            />
            <ResponsiveText style={styles.calendar}>
              {show_Date ? show_Date : 'Calendar'}
            </ResponsiveText>
          </Pressable>
          {show && (
            <View>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                minDate={new Date(2021, 1, 1)}
                maxDate={new Date(2050, 6, 3)}
                mode={'time'}
                is24Hour={false}
                display="default"
                onChange={onChange}
              />
            </View>
          )}

          <Pressable style={styles.calendarView} onPress={() => setShow(true)}>
            <Image
              source={require('../../assets/Images/flat-color-icons_clock.png')}
              style={styles.duration}
            />
            <ResponsiveText style={styles.calendar}>
              {showTime ? showTime : find_time}
            </ResponsiveText>
          </Pressable>
        </View>
      </View>
    );
  };
  const saveButton = () => {
    return (
      <View>
        <Button
          title={'Add Reminder'}
          onPress={addReminder}
          btnContainer={styles.reminderbtn}
          fontColor={'#fff'}
          fontSize={15}
        />
      </View>
    );
  };

  return (
    <Container style={styles.mainContainer}>
      {drawerIcon()}
      <ScrollView nestedScrollEnabled>
        {editprofileScetion()}
        {drugformulaName()}
        {type()}
        {potency()}
        {addNote()}
        {saveButton()}
      </ScrollView>
    </Container>
  );
};

export default AddReminder;
