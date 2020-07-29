import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Root } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { authenticationReducer } from './redux/reducers';

const storeRedux = createStore(authenticationReducer);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={storeRedux}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#2a83be" />
        <Root>
          <Routes />
        </Root>
      </View>
    </Provider>
  );
};
export default App;
