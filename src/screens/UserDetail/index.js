import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {
  Container,
  Input,
  ResponsiveText,
  Button,
  FadeInView,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userData} from '../../../src/redux/actions/userdataAction';

const UserDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userdataReducer);
  const [checked, setChecked] = useState(null);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [timePerid, setTimePeriod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //Logical part and send data to redux

  // useEffect(() => {
  //   AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  //   AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

  //   AdMobInterstitial.requestAd().catch((error) => console.warn('Hi', error));
  //   AdMobInterstitial.removeAllListeners();

  //   AdMobInterstitial.showAd().catch((error) => console.warn('Hello', error));
  // }, []);
  const onSubmit = () => {
    if (gender == 0) {
      setErrorMessage('Please select gender!!!');
    } else if (name.trim().length === 0) {
      setErrorMessage('Enter name!!!');
    } else if (age.trim().length === 0) {
      setErrorMessage('Enter age!!!');
    } else {
      setErrorMessage('');

      let userDataObj = {
        gender: gender,
        name: name,
        age: age,
        diagnosis: diagnosis,
        timePerid: timePerid,
      };
      dispatch(userData(userDataObj));

      navigation.navigate('AdminStack', {screen: 'Home1'});
    }
  };

  // Design of radio Button
  const radioGroup = () => {
    return (
      <View style={styles.radio}>
        <TouchableOpacity
          onPress={() => {
            setChecked(true), setGender('Male');
          }}>
          {checked == null ? (
            <Image
              source={require('../../assets/Icons/eyeshow.png')}
              style={{width: 30, height: 30}}
            />
          ) : checked ? (
            <Image
              source={require('../../assets/Icons/eyehide.png')}
              style={{width: 30, height: 30}}
            />
          ) : (
            <Image
              source={require('../../assets/Icons/eyeshow.png')}
              style={{width: 30, height: 30}}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.male}>Male</Text>
        <TouchableOpacity
          onPress={() => {
            setChecked(false), setGender('Female');
          }}
          style={styles.femaleCheck}>
          {checked == null ? (
            <Image
              source={require('../../assets/Icons/eyeshow.png')}
              style={{width: 30, height: 30}}
            />
          ) : !checked ? (
            <Image
              source={require('../../assets/Icons/eyehide.png')}
              style={{width: 30, height: 30}}
            />
          ) : (
            <Image
              source={require('../../assets/Icons/eyeshow.png')}
              style={{width: 30, height: 30}}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.female}>Female</Text>
      </View>
    );
  };

  // Design of Inputs
  const dataInputs = () => {
    return (
      <View>
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.nameContainer}>
              <ResponsiveText style={styles.text}>Your Name</ResponsiveText>
              <Input
                value={name}
                onChangeText={(e) => setName(e)}
                style={styles.input}
                keyboardType="default"
                returnKeyType="go"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            <View style={styles.inputContainer}>
              <ResponsiveText style={styles.text}>Age</ResponsiveText>
              <Input
                value={age}
                onChangeText={(e) => setAge(e)}
                keyboardType={'numeric'}
                style={styles.input}
                returnKeyType="go"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            <View style={styles.inputContainer}>
              <ResponsiveText style={styles.text}>Diagnosis</ResponsiveText>
              <Input
                placeholder="Optional"
                value={diagnosis}
                onChangeText={(e) => setDiagnosis(e)}
                style={styles.inputOptional}
                returnKeyType="go"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            <View style={styles.inputContainer}>
              <ResponsiveText style={styles.text}>Time Period</ResponsiveText>
              <Input
                placeholder="Optional"
                value={timePerid}
                //  keyboardType={'numeric'}
                onChangeText={(e) => setTimePeriod(e)}
                style={styles.inputOptional}
                returnKeyType="go"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        {/* <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="ca-app-pub-3940256099942544/2934735716"
        /> */}
      </View>
    );
  };
  //Design of Save Data Button
  const handleSave = () => {
    return (
      <Button
        title={'Save'}
        onPress={onSubmit}
        titleStyle={{fontSize: 8}}
        btnContainer={styles.saveButton}
        fontColor={'#fff'}
        fontSize={18}
      />
    );
  };
  // Main Code
  return (
    <Container style={styles.mainContainer}>
      {/* Gradient */}
      <LinearGradient
        colors={[
          '#FEC18A',
          '#F9C09B',
          '#F6BFA3',
          '#F5BEA7',
          '#F2BDB0',
          '#EFBCBA',
        ]}
        style={styles.gradient}>
        {/* Radio Button */}
        {radioGroup()}
        {/* Data inputs */}
        {dataInputs()}
        {/*Data Save */}
        {handleSave()}
      </LinearGradient>
    </Container>
  );
};

export default UserDetail;
