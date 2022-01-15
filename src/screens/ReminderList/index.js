import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  View,
  FlatList,
  Image,
  Alert,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container, ResponsiveText, medicenData} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import TodayReminderList from '../../components/TodayReminderList';
import {useDispatch, useSelector} from 'react-redux';
import {storeAddReminder} from '../../redux/actions/userdataAction';
import {AdMobBanner} from 'react-native-admob';

const ReminderList = ({navigation}) => {
  const dispatch = useDispatch();
  const getReminder = useSelector(
    (state) => state.userdataReducer.medicineReminder,
  );
  //console.log(`getReminder`, getReminder);
  const getMedicine = useSelector((state) => state.userdataReducer.addMadicen);

  const [modal, setModal] = useState(false);
  const [data, setData] = useState('');
  const [dataPopulate, setdataPopulate] = useState([]);
  const [reminderArray, setReminderArray] = useState([]);
  let date;
  let startDate;
  let endDate;
  let drug;
  let madicentype;
  let dayName;
  let medicineTime;
  let id;
  let saveIndex = null;
  let result = reminderArray.filter((item, index) => {
    if (item.id == data) {
      saveIndex = index;
    }
  });

  const setWeeklyData = () => {
    let arrSteps = [];
    getReminder.map((item) => {
      date = new Date(item.frequency);
      startDate = new Date(item.selectedStartDate);
      endDate = new Date(item.selectedEndDate);
      drug = item.drug;
      id = item.id;
      dayName = item.dayName;
      madicentype = item.madicentype;
      medicineTime = item.medicineTime;
      arrSteps.push({
        time: date.toLocaleTimeString(),
        startReminderDate: startDate.toLocaleDateString(),
        endReminderDate: endDate.toLocaleDateString(),
        drug: drug,
        madicentype: madicentype,
        dayName: dayName,
        medicineTime: medicineTime,
        id: id,
      });

      setReminderArray([...reminderArray.concat(arrSteps)]);
    });
  };

  useEffect(() => {
    setWeeklyData();
  }, []);
  const createTwoButtonAlert = () =>
    Alert.alert('Warning!', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => handleDelete()},
    ]);

  const handleDelete = () => {
    reminderArray.splice(saveIndex, 1);
    dispatch(storeAddReminder(reminderArray));
    setModal(false);
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
        <ResponsiveText style={styles.reminder}>Reminder's</ResponsiveText>
      </View>
    );
  };
  const showMedicine = (drug, index) => {
    return (
      <View>
        <ResponsiveText style={{color: '#fff', fontSize: 6}}>
          {drug[index]}
        </ResponsiveText>
      </View>
    );
  };

  const asNeeded = () => {
    console.log(`reminderArray`, reminderArray);
    return (
      <FlatList
        data={reminderArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View>
            <View style={styles.root}>
              <View style={{flexDirection: 'row'}}>
                {/* {item.madicentype.map(
                    (v, i) => (
                      console.log('VVVVVVVV', v),
                      (
                        <View style={styles.liststyle}>
                          <Image
                            style={styles.image}
                            // source={medicenData[item.madicentype[0]].image}
                            source={require('../../assets/Images/5.png')}
                          />
                        </View>
                      )
                    ),
                  )} */}
                <View style={styles.liststyle}>
                  <Image
                    style={styles.image}
                    source={medicenData[item.madicentype[0]].image}
                    //source={require('../../assets/Images/5.png')}
                  />
                </View>
                <View style={styles.titleContainer}>
                  <ResponsiveText style={styles.title}>
                    {showMedicine(item.drug, index)}
                  </ResponsiveText>
                  <View style={styles.remaiderShedule}>
                    <ResponsiveText />
                    <ResponsiveText style={{color: '#fff'}}>
                      {item.startReminderDate}
                    </ResponsiveText>
                    <ResponsiveText style={{color: '#fff'}}>
                      {item.time}
                    </ResponsiveText>
                  </View>
                  {item.medicineTime.length <= 2 ? (
                    <View style={{flexDirection: 'row'}}>
                      {item.medicineTime.map((a, i) => (
                        <View style={styles.breakfastStyle}>
                          <ResponsiveText style={{color: '#fff'}}>
                            {a.bb}
                            {a.ab}
                          </ResponsiveText>
                        </View>
                      ))}
                    </View>
                  ) : (
                    <View>
                      {item.medicineTime.map((a, i) => (
                        <View style={styles.breakfastStyle}>
                          <ResponsiveText
                            style={{color: '#fff', alignSelf: 'center'}}>
                            {a.bb}
                            {a.ab}
                          </ResponsiveText>
                        </View>
                      ))}
                    </View>
                  )}
                </View>

                <View style={styles.menuContainer}>
                  <Pressable
                    onPress={() => {
                      createTwoButtonAlert(), setData(item.id);
                    }}>
                    <Image
                      source={require('../../assets/Icons/menuDots.png')}
                      style={styles.menu}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            {modal ? (
              <View style={styles.deleteContainer}>
                <TouchableWithoutFeedback
                  style={{width: 100, height: 100, backgroundColor: 'yellow'}}
                  onPress={() => setModal(false)}>
                  <View>
                    <TouchableOpacity onPress={() => handleDelete()}>
                      <ResponsiveText style={styles.delete}>
                        Delete
                      </ResponsiveText>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            ) : null}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const handleButton = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles.medicine}>
          <ResponsiveText style={styles.medicineText}>
            Add Medicine
          </ResponsiveText>
        </View>
        <View style={styles.medicine}>
          <ResponsiveText style={styles.medicineText}>Save</ResponsiveText>
        </View>
      </View>
    );
  };

  return (
    <Container style={styles.mainContainer}>
      <View>
        {drawerIcon()}
        {asNeeded()}
        <View style={{bottom: 0}}>
          <AdMobBanner
            adSize="smartBannerLandscape"
            adUnitID="ca-app-pub-6212540896507732/6297235560"
          />
        </View>
      </View>

      {/* {handleButton()} */}
    </Container>
  );
};

export default ReminderList;
