import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  View,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  ResponsiveText,
  Button,
  Input,
  FadeInView,
  medicenData,
} from '../../components';
import {DrawerActions} from '@react-navigation/native';
import {AdMobInterstitial} from 'react-native-admob';
import Icon from 'react-native-vector-icons/Entypo';
import AddmadicenModal from '../../components/AddmadicenModal';
import {useDispatch, useSelector} from 'react-redux';
import {addMadicen} from '../../../src/redux/actions/userdataAction';

const AddMadicen = ({route, navigation}) => {
  const item1 = route.params ? route.params.item : null;

  const dispatch = useDispatch();
  const addmedicen = useSelector((state) => state.userdataReducer.addMadicen);
  const [drug, setDrug] = useState(item1 ? item1.drug : '');
  const [note, setNote] = useState(item1 ? item1.note : '');
  const [mgpotency, setMgpotency] = useState(item1 ? item1.mgpotency : 0);
  const [modalVisible, setModalVisible] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [selected, setSelected] = useState(item1 ? item1.madicentype : null);
  const [madicentype, setMadicentype] = useState(item1 ? item1.madicentype : 0);
  const [errorMessage, setErrorMessage] = useState('');
  const [imagePath, setImagePath] = useState('');
  let medicenIndex;

  const result = addmedicen.filter((data, index) => {
    let id = item1 ? item1.id : null;
    if (id == data.id) {
      medicenIndex = index;
      return true;
    }
  });

  useEffect(() => {
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-6212540896507732/8946615484');

    AdMobInterstitial.requestAd().catch((error) => console.log('Hi', error));
    AdMobInterstitial.removeAllListeners();

    AdMobInterstitial.showAd().catch((error) => console.log('Hello', error));
  }, []);

  const onUpdate = () => {
    addmedicen[medicenIndex].drug = drug;
    addmedicen[medicenIndex].madicentype = madicentype;
    addmedicen[medicenIndex].mgpotency = mgpotency;
    addmedicen[medicenIndex].note = note;
    dispatch(addMadicen(addmedicen));
    navigation.navigate('HomeScreenData');
  };

  const onSubmit = () => {
    if (drug.trim().length === 0) {
      setErrorMessage('Enter drug!!!');
    } else if (madicentype.length <= 0) {
      setErrorMessage('Select madicen type!!!');
    } else {
      setErrorMessage('');
      addmedicen.push({
        drug: drug,
        madicentype: madicentype,
        mgpotency: mgpotency,
        note: note,
        asneede: purpose,
        id: Math.random(),
      });
      dispatch(addMadicen(addmedicen));

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

        <View style={styles.inputText}>
          <Input
            value={drug}
            onChangeText={(e) => setDrug(e)}
            style={styles.input}
            returnKeyType="go"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </View>
    );
  };
  const type = () => {
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
              <TouchableOpacity
                onPress={() => {
                  setSelected(index),
                    setMadicentype(index),
                    setImagePath(item.image);
                }}
                style={[
                  styles.listView,
                  index == selected && {
                    backgroundColor: '#fff',
                    borderColor: 'red',
                    borderWidth: 4,
                  },
                ]}>
                <Image
                  style={{resizeMode: 'contain', height: 40, width: 40}}
                  source={item.image}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  };
  const potency = () => {
    return (
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ResponsiveText style={styles.potency}>Potency</ResponsiveText>
          <ResponsiveText style={styles.potency}>Tab to mark</ResponsiveText>
        </View>
        <View style={styles.btnStyle}>
          <Input
            value={mgpotency}
            onChangeText={(e) => setMgpotency(e)}
            placeholder="200mg"
            style={styles.mgInput}
            returnKeyType="go"
            onSubmitEditing={Keyboard.dismiss}
          />
          <Pressable
            style={styles.needed}
            onPress={() => setModalVisible(true)}>
            <ResponsiveText style={{color: '#fff'}}>As needed</ResponsiveText>
          </Pressable>
        </View>
        <AddmadicenModal
          purpose={purpose}
          setPurpose={setPurpose}
          modalVisible={modalVisible}
          CloseModal={() => setModalVisible(false)}
        />
      </View>
    );
  };
  const addNote = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <ResponsiveText style={styles.addNote}>Add note</ResponsiveText>
        <View style={styles.noteContainer}>
          <Input
            value={note}
            onChangeText={(e) => setNote(e)}
            numberOfLines={4}
            style={styles.noteInput}
            returnKeyType="go"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </View>
    );
  };
  const saveButton = () => {
    return (
      <View>
        <Button
          title={item1 ? 'Update' : 'Save'}
          onPress={item1 ? onUpdate : () => onSubmit()}
          btnContainer={styles.saveBtn}
          fontColor={'#fff'}
          fontSize={15}
        />
      </View>
    );
  };
  return (
    <Container style={styles.mainContainer}>
      {drawerIcon()}
      <ScrollView>
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

export default AddMadicen;
