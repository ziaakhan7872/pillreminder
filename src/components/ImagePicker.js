import React from 'react';
import {Modal, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const ImagePicker = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
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
              <TouchableOpacity onPress={() => props.function1()}>
                <Text style={styles.messageText2}>{props.btn1}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.function2()}>
                <Text style={styles.messageText2}>{props.btn2}</Text>
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

export default ImagePicker;
