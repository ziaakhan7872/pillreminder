import React from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  Keyboard,
  View,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from './ResponsiveText';
import Input from './Input';
import Button from './Button';

const addmadicenModal = (props) => {
  const onSubmit = () => {
    console.log('modal');
    props.CloseModal;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <TouchableOpacity style={styles.centeredView} onPress={props.CloseModal}>
        <View style={styles.modalView}>
          <ResponsiveText>Purpose</ResponsiveText>
          <Input
            value={props.purpose}
            onChangeText={(e) => props.setPurpose(e)}
            style={styles.noteInput}
            returnKeyType="go"
            onSubmitEditing={Keyboard.dismiss}
          />
          <Button
            title={'Save'}
            onPress={props.CloseModal}
            btnContainer={styles.saveBtn}
            fontColor={'#fff'}
            fontSize={15}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
  },
  noteInput: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#ECECEC',
  },
  saveBtn: {
    marginTop: 20,
    width: 80,
    height: 40,
    backgroundColor: '#5FBACF',
    alignSelf: 'center',
  },
});
export default addmadicenModal;
