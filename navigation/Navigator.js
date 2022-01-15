import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetail from '../src/screens/UserDetail';
import Splash from '../src/screens/Splash';
import MemberScreen from '../src/screens/MemberScreen';
import drawerNav from './drawerNav';
import UserProfile from '../src/screens/UserProfile';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

export const homeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

const AppHome = () => {
  const getMadicen = useSelector((state) => state.userdataReducer);
  //console.log('getMadicen====>', getMadicen.addMadicen);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
      <Stack.Screen name="MemberScreen" component={MemberScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="AdminStack" component={drawerNav} />
    </Stack.Navigator>
  );
};

//TODO: AddReminder remove from here and add to drawer nav
export default AppHome;
