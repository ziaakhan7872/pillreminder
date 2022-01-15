import React from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ResponsiveText} from '.';

const Calendar = (props) => {
  const onDateChange = (date, type) => {
    let d1 = new Date(date);

    if (type === 'END_DATE') {
      props.setSelectedEndDate(d1);
    } else {
      props.setSelectedEndDate(null);
      props.setSelectedStartDate(d1);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.calendarVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={styles.centeredView}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={new Date(2020, 1, 1)}
              maxDate={new Date(2050, 6, 3)}
              weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
              months={[
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]}
              previousTitle="Previous"
              nextTitle="Next"
              todayBackgroundColor="#e6ffe6"
              selectedDayColor="#66ff33"
              selectedDayTextColor="#000000"
              scaleFactor={375}
              textStyle={{
                fontFamily: 'Cochin',
                color: '#000000',
              }}
              onDateChange={onDateChange}
            />

            <TouchableOpacity style={styles.close} onPress={props.CloseModal}>
              <ResponsiveText style={{color: '#fff', fontSize: 4}}>
                OK
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalView: {
    flex: 0.7,
    backgroundColor: '#fff',
    top: hp(20),
  },

  container: {
    flex: 1,
  },
  close: {
    backgroundColor: '#82AEC0',
    padding: 10,
    width: widthPercentageToDP(50),
    alignItems: 'center',
    marginTop: hp(5),
    borderRadius: 20,
  },
});
export default Calendar;
