import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Root } from 'native-base';
import Routes from './Routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#2a83be" />
      <Root>
        <Routes />
      </Root>
    </View>
  );
};
export default App;
