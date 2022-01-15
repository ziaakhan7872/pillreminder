import React, {useState, useEffect} from 'react';
import styles from './styles';
import {View, ScrollView, Pressable, FlatList} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import Icon from 'react-native-vector-icons/Entypo';
import {DrawerActions} from '@react-navigation/native';
import AddReports from '../../components/AddReports';
import AddPrescription from '../../components/AddPrescription';
import AddReportsDummy from '../../components/AddReportsDummy';
import ModalMessage from '../../components/ImagePicker';
import ModalPrescription from '../../components/ModalPrescription';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';
import {storeReports} from '../../../src/redux/actions/userdataAction';
import {AdMobBanner} from 'react-native-admob';

const ReportsPrescription = ({navigation}) => {
  const dispatch = useDispatch();
  const reportsArray = useSelector(
    (state) => state.userdataReducer.reportsData,
  );
  const prescriptionArray = useSelector(
    (state) => state.userdataReducer.prescriptionData,
  );
  const [toggle, setToggle] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isprescription, setIsprescription] = useState(false);
  const [fileUri, setFileUri] = useState('');
  const [prescriptionUri, setprescriptionUri] = useState('');
  const [dataPopulate, setdataPopulate] = useState([]);
  const handleData = () => {
    setdataPopulate(dataPopulate.concat(reportsArray));
  };

  const selectImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);
      // console.log('uri ===>', response.assets[0].uri);
      console.log('fileUri', fileUri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        setIsModalVisible(false);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        setIsModalVisible(false);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        setIsModalVisible(false);
        alert(response.customButton);
      } else {
        setIsModalVisible(false);
        setFileUri(response.assets[0].uri);
        reportsArray.push({
          fileUri: response.assets[0].uri,
        });
        dispatch(storeReports(reportsArray));
        handleData();
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
      // console.log('Response = ', response);
      // console.log('uri ===>', response.assets[0].uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        setIsModalVisible(false);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        setIsModalVisible(false);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        setIsModalVisible(false);
        alert(response.customButton);
      } else {
        setIsModalVisible(false);
        setFileUri(response.assets[0].uri);
        reportsArray.push({
          fileUri: response.assets[0].uri,
        });
        dispatch(storeReports(reportsArray));
        handleData();
      }
    });
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
  const reports = () => {
    return (
      <View style={styles.reportView}>
        {/* Reports */}
        <ResponsiveText style={styles.reports}>Reports</ResponsiveText>
        {reportsArray.length == 0 ? (
          <View style={styles.addReport}>
            <Pressable
              style={styles.addButtonView}
              onPress={() => setIsModalVisible(true)}>
              <ResponsiveText style={styles.addButton}>+</ResponsiveText>
            </Pressable>
            <ResponsiveText style={styles.clickAdd}>
              Click to add
            </ResponsiveText>
          </View>
        ) : (
          <View>
            <FlatList
              data={dataPopulate}
              horizontal
              keyExtractor={(item, index) => item.fileUri}
              renderItem={({item}) => <AddReports item={item} />}
              showsHorizontalScrollIndicator={false}
            />
            <Pressable
              style={styles.addButtonView1}
              onPress={() => setIsModalVisible(true)}>
              <ResponsiveText style={styles.addButton1}>+</ResponsiveText>
            </Pressable>
            <ResponsiveText style={styles.clickAdd1}>
              Click to add
            </ResponsiveText>
          </View>
        )}

        <ModalMessage
          isModalVisible={isModalVisible}
          msg={'Choose image from camera or gallery'}
          btn1={'Camera'}
          btn2={'Gallery'}
          function1={openCamera}
          function2={selectImage}
          CloseModal={() => setIsModalVisible(false)}
        />
      </View>
    );
  };

  const ReportsPrescription = () => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.reportView1}>
          <View style={styles.presView}>
            <ResponsiveText style={styles.reports}>
              Prescriptions
            </ResponsiveText>
            {prescriptionArray.length == 0 ? (
              <View>
                <View style={styles.addReport}>
                  <Pressable
                    style={styles.addButtonView}
                    onPress={() => setIsprescription(true)}>
                    <ResponsiveText style={styles.addButton}>+</ResponsiveText>
                  </Pressable>
                  <ResponsiveText style={styles.clickAdd}>
                    Click to add
                  </ResponsiveText>
                </View>
              </View>
            ) : (
              <View>
                <View>
                  <FlatList
                    data={prescriptionArray}
                    horizontal
                    keyExtractor={(item, index) => item.prescriptionUri}
                    renderItem={({item}) => <AddPrescription item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  <Pressable
                    style={styles.addButtonView1}
                    onPress={() => setIsprescription(true)}>
                    <ResponsiveText style={styles.addButton1}>+</ResponsiveText>
                  </Pressable>
                  <ResponsiveText style={styles.clickAdd1}>
                    Click to add
                  </ResponsiveText>
                </View>
              </View>
            )}
          </View>
          <ModalPrescription
            isprescription={isprescription}
            setIsprescription={setIsprescription}
            setprescriptionUri={setprescriptionUri}
            prescriptionUri={prescriptionUri}
            msg={'Choose image from camera or gallery'}
            CloseModal={() => setIsprescription(false)}
          />
        </View>
      </View>
    );
  };
  return (
    <Container>
      {drawerIcon()}
      <ScrollView>
        {reports()}
        {ReportsPrescription()}
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0}}>
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="ca-app-pub-6212540896507732/6297235560"
        />
      </View>
    </Container>
  );
};

export default ReportsPrescription;
