import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Keyboard, Image} from 'react-native';
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
import {addMember} from '../../../src/redux/actions/userdataAction';

const MemberScreen = ({navigation}) => {
  const memberData = useSelector((state) => state.userdataReducer.memberData);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState('Female');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [relation, setRelation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = () => {
    if (name.trim().length === 0) {
      setErrorMessage('Enter name!!!');
    } else if (age.trim().length === 0) {
      setErrorMessage('Enter age!!!');
    } else {
      setErrorMessage('');
      memberData.push({
        id: Math.random(),
        gender: gender,
        name: name,
        age: age,
        relation: relation,
        diagnosis: diagnosis,
      });
      dispatch(addMember(memberData));
      navigation.navigate('AddMember');
    }
  };

  const radioGroup = () => {
    return (
      <View style={styles.radio}>
        <TouchableOpacity
          onPress={() => {
            setChecked(true), setGender('Male');
          }}>
          {checked ? (
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
          {!checked ? (
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
  const dataInputs = () => {
    return (
      <View>
        <FadeInView>
          <ResponsiveText
            style={{
              color: errorMessage.length ? 'red' : 'transparent',
              textAlign: 'center',
              marginTop: 5,
              fontSize: 5,
            }}>
            {errorMessage.length ? errorMessage : null}
          </ResponsiveText>
        </FadeInView>
        <View style={styles.nameInput}>
          <ResponsiveText style={styles.text}>Member Name</ResponsiveText>
          <Input
            value={name}
            onChangeText={(e) => setName(e)}
            style={styles.input}
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
          <ResponsiveText style={styles.text}>
            Relation with member
          </ResponsiveText>
          <Input
            placeholder="Optional"
            value={relation}
            onChangeText={(e) => setRelation(e)}
            style={styles.inputOptional}
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
      </View>
    );
  };

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
          '#5CB7CD',
          '#50AEC3',
          '#47A6BC',
          '#3F9FB6',
          '#3194AA',
          '#298DA4',
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

export default MemberScreen;
