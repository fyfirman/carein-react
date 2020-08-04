import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux';
import Api from '../../services';
import { CardMedicalHistory } from './components';
import { Header } from '../../components';
import { StringBuilder } from '../../helpers';
import styles from './styles';
import mockData from './mockData';

const propTypes = {
  workerType: PropTypes.string.isRequired
};

const defaultProps = {};

const MedicalHistory = () => {
  // const [state, setState] = useState({ position: {}, worker: [] });

  useEffect(() => {
    const fetchMedicalHistory = async () => {};

    fetchMedicalHistory();
  }, []);

  return (
    <Container>
      <Header
        iconName="chevron-back-outline"
        title="Pilih Dokter"
        onPress={() => Actions.pop()}
      />
      <Content style={styles.cardContainer}>
        {mockData.map((item, index) => (
          <CardMedicalHistory key={index} name={item.name} date={item.date} />
        ))}
      </Content>
    </Container>
  );
};

MedicalHistory.propTypes = propTypes;
MedicalHistory.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(MedicalHistory);
