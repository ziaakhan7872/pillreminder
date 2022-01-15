import React from 'react';
import {Modal, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {storePrescription} from '../redux/actions/userdataAction';
import {useDispatch, useSelector} from 'react-redux';

const ModalPrescription = (props) => {
  const prescriptionData = useSelector(
    (state) => state.userdataReducer.prescriptionData,
  );
  const dispatch = useDispatch();
  const selectImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      console.log('uri ===>', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        props.setIsprescription(false);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        props.setIsprescription(false);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        props.setIsprescription(false);
        alert(response);
      } else {
        props.setIsprescription(false);
        props.setprescriptionUri(response.assets[0].uri);
        prescriptionData.push({
          prescriptionUri: response.assets[0].uri,
        });
        dispatch(storePrescription(prescriptionData));
      }
    });
  };

  const openCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
      },
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);
      console.log('uri ===>', response.assets[0].uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        props.setIsprescription(false);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        props.setIsprescription(false);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        props.setIsprescription(false);
        alert(response.customButton);
      } else {
        props.setIsprescription(false);
        // setFileUri(response.assets[0].uri);
        prescriptionData.push({
          prescriptionUri: response.assets[0].uri,
        });
        dispatch(storePrescription(prescriptionData));
      }
    });
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isprescription}
      onRequestClose={props.CloseModal}>
      <View style={styles.modalView}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={props.CloseModal}>
          <View style={styles.boxView}>
            <View style={styles.messageView}>
              <Text style={styles.messageText}>{props.msg}</Text>
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity onPress={() => openCamera()}>
                <Text style={styles.messageText2}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectImage()}>
                <Text style={styles.messageText2}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  boxView: {
    backgroundColor: '#5FBACF',
    height: 200,
    width: '90%',
    borderRadius: 20,
  },
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  messageView: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingLeft: 20,
    marginBottom: 30,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Sanchez',
  },
  messageText2: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Sanchez',
    paddingBottom: 10,
  },
  btnView: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ModalPrescription;
