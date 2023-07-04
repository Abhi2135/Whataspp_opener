/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/state/store';

import Router from './src/navigation/router';

const App = () => {
  return (
    <Provider store={configureStore().store}>
      <PersistGate persistor={configureStore().persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
