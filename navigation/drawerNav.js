import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screens/Home';
import HomeScreenData from '../src/screens/HomeScreenData';
import AddMadicen from '../src/screens/AddMadicen';
import AddMember from '../src/screens/AddMember';
import AsNeeded from '../src/screens/AsNeeded';
import TodayReminder from '../src/screens/TodayReminder';

import ReportsPrescription from '../src/screens/ReportsPrescription';
import ReminderList from '../src/screens/ReminderList';
import AddReminder from '../src/screens/AddReminder';

import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeNavigation = () => {
  const getMadicen = useSelector((state) => state.userdataReducer);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, initialRouteName: 'HomeScreenData'}}>
      <Stack.Screen name="HomeScreenData" component={HomeScreenData} />

      <Stack.Screen name="AddMadicen" component={AddMadicen} />
      <Stack.Screen name="TodayReminder" component={TodayReminder} />

      {/* <Stack.Screen name="ReminderList" component={ReminderList} /> */}
      <Stack.Screen name="AddReminder" component={AddReminder} />
    </Stack.Navigator>
  );
};

const drawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#fff',
        labelStyle: {color: '#fff'},
        style: {backgroundColor: '#1D7589'},
      }}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      {/* <Drawer.Screen
        name="AddMember"
        component={AddMember}
        options={{
          title: 'Add Member',
        }}
      /> */}
      <Drawer.Screen
        name="AsNeeded"
        component={AsNeeded}
        options={{
          title: 'As Needed',
        }}
      />
      <Drawer.Screen
        name="ReminderList"
        component={ReminderList}
        options={{
          title: 'Reminders',
        }}
      />

      <Drawer.Screen
        name="ReportsPrescription"
        component={ReportsPrescription}
        options={{
          title: 'Reports & Prescription',
        }}
      />
    </Drawer.Navigator>
  );
};

export default drawerNav;
