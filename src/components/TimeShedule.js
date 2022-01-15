import React, {useState} from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import ResponsiveText from './ResponsiveText';
import Button from './Button';

const TimeShedule = (props) => {
  const [beforeBreakfast, setbeforeBreakfast] = useState(true);
  const [afterBreakfast, setafterBreakfast] = useState(true);
  const [beforeLunch, setbeforeLunch] = useState(true);
  const [afterLunch, setafterLunch] = useState(true);
  const [beforeDinner, setbeforeDinner] = useState(true);
  const [afterDinner, setafterDinner] = useState(true);
  const [array, setArray] = useState([]);
  console.log('array', array);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.timeShedule}
      onRequestClose={props.CloseModal}>
      {/* <TouchableOpacity style={styles.centeredView} onPress={props.CloseModal}> */}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ResponsiveText style={{alignSelf: 'center', fontSize: 5}}>
            Time Shedule
          </ResponsiveText>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Button
              title={'Before Breakfast'}
              disabled={!beforeBreakfast}
              onPress={() => {
                array.push({bb: 'Before Breakfast'}), setbeforeBreakfast(false);
                setArray([...array]);
                props.setMedicineTime([...array]);
              }}
              btnContainer={
                beforeBreakfast ? styles.saveBtn : styles.saveBtnSelected
              }
              fontColor={!beforeBreakfast ? '#000' : '#fff'}
              fontSize={15}
            />

            <Button
              disabled={!afterBreakfast}
              title={'After Breakfast'}
              onPress={() => {
                array.push({ab: 'After Breakfast'}), setafterBreakfast(false);
                setArray([...array]);
                props.setMedicineTime([...array]);
              }}
              btnContainer={
                afterBreakfast ? styles.saveBtn : styles.saveBtnSelected
              }
              fontColor={!afterBreakfast ? '#000' : '#fff'}
              fontSize={15}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Button
              disabled={!beforeLunch}
              title={'Before Lunch'}
              onPress={() => {
                array.push({bb: 'Before Lunch'}), setbeforeLunch(false);
                setArray([...array]);
                props.setMedicineTime([...array]);
              }}
              btnContainer={
                beforeLunch ? styles.saveBtn : styles.saveBtnSelected
              }
              fontColor={!beforeLunch ? '#000' : '#fff'}
              fontSize={15}
            />
            <Button
              disabled={!afterLunch}
              title={'After Lunch'}
              onPress={() => {
                array.push({ab: 'After Lunch'}), setafterLunch(false);
                setArray([...array]);
                props.setMedicineTime([...array]);
              }}
              btnContainer={
                afterLunch ? styles.saveBtn : styles.saveBtnSelected
              }
              fontColor={!afterLunch ? '#000' : '#fff'}
              fontSize={15}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Button
              disabled={!beforeDinner}
              title={'Before Dinner'}
              onPress={() => {
                array.push({bb: 'Before Dinner'}), setbeforeDinner(false);
                setArray([...array]);
                props.setMedicineTime([...array]);
              }}
              btnContainer={
                beforeDinner ? styles.saveBtn : styles.saveBtnSelected
              }
              fontColor={!beforeDinner ? '#000' : '#fff'}
              fontSize={15}
            />

            <Button
              title={'After Dinner'}
              disabled={!afterDinner}
              onPress={() => {
                array.push({ab: 'After Dinner'}), setafterDinner(false);
                setArray([...array]);
                props.setMedicineTime([...array]);
              }}
              btnContainer={
                afterDinner ? styles.saveBtn : styles.saveBtnSelected
              }
              fontColor={!afterDinner ? '#000' : '#fff'}
              fontSize={15}
            />
          </View>

          <Button
            title={'ADD'}
            onPress={props.CloseModal}
            btnContainer={styles.addButton}
            fontColor={'#fff'}
            fontSize={15}
          />
        </View>
      </View>
      {/* </TouchableOpacity> */}
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addButton: {
    marginTop: 20,
    width: 150,
    height: 40,
    backgroundColor: '#5FBACF',
    alignSelf: 'center',
  },

  saveBtn: {
    paddingVertical: 5,
    marginTop: 20,
    width: 150,
    height: 40,
    backgroundColor: '#FEB069',
    alignSelf: 'center',
  },
  saveBtnSelected: {
    paddingVertical: 5,
    //  marginTop: 20,
    width: 150,
    height: 40,
    color: '#000',
    borderColor: '#FEB069',
    borderWidth: 2,
    alignSelf: 'center',
  },
  saveBtn1: {
    // marginTop: 20,
    width: 150,
    height: 40,
    backgroundColor: '#E3B9DF',
    alignSelf: 'center',
  },
  breakfast: {
    paddingHorizontal: 10,
    // paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: '#FEB069',
  },
  dinner: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: '#E3B9DF',
  },
});
export default TimeShedule;
