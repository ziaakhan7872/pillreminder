import React, {useState} from 'react';
import styles from './styles';
import {
  View,
  Image,
  ScrollView,
  LogBox,
  Keyboard,
  FlatList,
} from 'react-native';
import {Container, ResponsiveText, Button, Input} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {userData, addMadicen} from '../../redux/actions/userdataAction';
import {TouchableOpacity} from 'react-native-gesture-handler';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getMadicen = useSelector((state) => state.userdataReducer.addMadicen);
  const getuserData = useSelector((state) => state.userdataReducer.userData);

  const [ageView, setageView] = useState(false);
  const [name, setName] = useState(getuserData.name);
  const [age, setAge] = useState(getuserData.age);
  const [diagnos, setDiagnos] = useState(getuserData.diagnosis);
  const [diagnosesModal, setDiagnosesModal] = useState(false);
  const [updatemodalVisible, setupdatemodalVisible] = useState(false);
  const [updateDrug, setupdateDrug] = useState('');
  const [updateMgpotency, setupdateMgpotency] = useState('');
  const [updateid, setupdateid] = useState('');

  const editProfile = () => {
    (getuserData.name = name),
      (getuserData.age = age),
      dispatch(userData(getuserData));
  };

  const editDiagnosis = () => {
    (getuserData.diagnosis = diagnos), dispatch(userData(getuserData));
  };
  const onSubmit = () => {
    console.log('submit');
  };

  const updateMedication = () => {
    var saveIndex = null;
    if (updatemodalVisible == true) {
      const result = getMadicen.filter((data, index) => {
        if (data.id === updateid) {
          saveIndex = index;
          return saveIndex;
        }
      });
    }

    getMadicen[saveIndex].drug = updateDrug;
    getMadicen[saveIndex].mgpotency = updateMgpotency;
    dispatch(addMadicen(getMadicen));
  };
  const handleEdit = () => {
    console.log('edit diagnosis');
  };
  const drawerIcon = () => {
    return (
      <View>
        <View style={styles.icon}>
          <Icon
            name="chevron-left"
            size={25}
            color="#000"
            onPress={() => navigation.pop()}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/Images/maleIcon.png')}
            resizeMode="contain"
            style={styles.profile}
          />
          <ResponsiveText style={styles.nameText}>{name}</ResponsiveText>
          <ResponsiveText style={styles.editName}>
            Click to edit name
          </ResponsiveText>
        </View>
      </View>
    );
  };

  const bottomCard = () => {
    return (
      <ScrollView
        style={styles.bottomContainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        <View style={styles.bottomView}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={styles.ageView}>
              <ResponsiveText style={styles.age}>Age</ResponsiveText>
              <ResponsiveText style={styles.age}>{age}</ResponsiveText>
            </View>

            {ageView && (
              <View style={styles.ageContainer}>
                <Input
                  value={name}
                  onChangeText={(e) => setName(e)}
                  style={styles.inputOptional}
                  returnKeyType="go"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <Input
                  value={age}
                  onChangeText={(e) => setAge(e)}
                  style={styles.inputOptional}
                  returnKeyType="go"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <Button
                  title={'Ok'}
                  onPress={() => {
                    setageView(false), editProfile();
                  }}
                  titleStyle={{fontSize: 8}}
                  btnContainer={styles.saveButton}
                  fontColor={'#fff'}
                  fontSize={18}
                />
              </View>
            )}
            {diagnosesModal ? (
              <View style={styles.ageContainer}>
                <Input
                  value={diagnos}
                  onChangeText={(e) => setDiagnos(e)}
                  style={styles.inputOptional}
                  returnKeyType="go"
                  onSubmitEditing={Keyboard.dismiss}
                />

                <Button
                  title={'Update'}
                  onPress={() => {
                    setDiagnosesModal(false), editDiagnosis();
                  }}
                  titleStyle={{fontSize: 8}}
                  btnContainer={styles.saveButton}
                  fontColor={'#fff'}
                  fontSize={18}
                />
              </View>
            ) : null}

            {updatemodalVisible ? (
              <View style={styles.ageContainer}>
                <Input
                  value={updateDrug}
                  onChangeText={(e) => setupdateDrug(e)}
                  style={styles.inputOptional}
                  returnKeyType="go"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <Input
                  value={updateMgpotency}
                  onChangeText={(e) => setupdateMgpotency(e)}
                  style={styles.inputOptional}
                  returnKeyType="go"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <Button
                  title={'Update'}
                  onPress={() => {
                    setupdatemodalVisible(false), updateMedication();
                  }}
                  titleStyle={{fontSize: 8}}
                  btnContainer={styles.saveButton}
                  fontColor={'#fff'}
                  fontSize={18}
                />
              </View>
            ) : null}

            <View style={styles.buttonView}>
              <Button
                title={'Edit'}
                onPress={() => setageView(true)}
                titleStyle={{fontSize: 8}}
                btnContainer={styles.saveButton}
                fontColor={'#fff'}
                fontSize={18}
              />
            </View>
          </View>
          {/* TODO: working here */}
          <View style={styles.diagnosisView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <ResponsiveText style={styles.diagnosis}>
                Diagnosis
              </ResponsiveText>
              <ResponsiveText style={styles.monthAgo}>
                8 month ago
              </ResponsiveText>
              <ResponsiveText
              // style={styles.edit}
              // onPress={() => setDiagnosesModal(true)}>
              // Edit
              ></ResponsiveText>
            </View>
            <View style={styles.diagnosisView2}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.stomach} />
                  <ResponsiveText style={styles.skin}>
                    {diagnos ? diagnos : 'No data'}
                  </ResponsiveText>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.editList}
                    onPress={() => setDiagnosesModal(true)}>
                    <Icon name="edit" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* second list */}

        <View style={styles.diagnosisView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <ResponsiveText style={styles.diagnosis}>Medication</ResponsiveText>
            <ResponsiveText style={styles.monthAgo}></ResponsiveText>
            <ResponsiveText />
          </View>

          {/* TODO:working here */}

          <View style={styles.medicationsstyle}>
            <FlatList
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled
              style={{backgroundColor: '#5FBACF'}}
              data={getMadicen}
              // numColumns={2}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <View style={styles.diagnosisView3}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignSelf: 'center',
                        }}>
                        <View style={styles.stomach} />
                        <ResponsiveText style={styles.medicine}>
                          {item.drug}
                        </ResponsiveText>
                        <ResponsiveText
                          style={{
                            alignSelf: 'center',
                            color: '#fff',
                            width: 50,
                          }}>
                          {item.mgpotency}
                        </ResponsiveText>
                        {/* TODO: working here */}
                        <TouchableOpacity
                          style={styles.editList}
                          onPress={() => {
                            setupdatemodalVisible(true), setupdateid(item.id);
                            setupdateDrug(item.drug),
                              setupdateMgpotency(item.mgpotency);
                          }}>
                          <Icon name="edit" size={20} color="#000" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        <View style={styles.diagnosisView}>
          <View style={styles.reminder}>
            <ResponsiveText style={styles.diagnosis}>Reminder</ResponsiveText>
            <ResponsiveText style={styles.monthAgo}></ResponsiveText>
            <ResponsiveText />
          </View>
          <View style={styles.reminderContainer}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#94D1E0',
                alignSelf: 'center',
                justifyContent: 'center',
                width: wp(50),
                paddingVertical: 5,
              }}>
              <ResponsiveText
                style={styles.allReminders}
                onPress={() => navigation.navigate('ReminderList')}>
                Tab to see all reminders
              </ResponsiveText>
            </View>
          </View>
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button
            title={'Save'}
            onPress={onSubmit}
            titleStyle={{fontSize: 8}}
            btnContainer={styles.saveDone}
            fontColor={'#5FBACF'}
            fontSize={18}
          />
          <Button
            title={'Done'}
            onPress={() => navigation.navigate('TodayReminder')}
            titleStyle={{fontSize: 8}}
            btnContainer={styles.saveDone}
            fontColor={'#5FBACF'}
            fontSize={18}
          />
        </View> */}
      </ScrollView>
    );
  };

  return (
    <Container style={styles.mainContainer}>
      {drawerIcon()}
      {bottomCard()}
    </Container>
  );
};

export default UserProfile;
