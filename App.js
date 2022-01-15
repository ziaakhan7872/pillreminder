import React from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AppHome from './navigation/Navigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';

import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['EventEmitter.removeListener']);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AppHome />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
