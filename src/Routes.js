import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Home, Login, Register, RegisterMedicalHistory } from './pages';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial />
      <Scene key="home" component={Home} title="Home" />
      <Scene key="register" component={Register} title="Register" />
      <Scene
        key="registerMedicalHistory"
        component={RegisterMedicalHistory}
        title="Riwayat Kesehatan"
      />
    </Scene>
  </Router>
);
export default Routes;
