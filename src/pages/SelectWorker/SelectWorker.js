import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Geolocation from '@react-native-community/geolocation';
import { connect } from 'react-redux';
import Api from '../../services';
import { CardWorker } from './components';
import { Header } from '../../components';
import { StringBuilder } from '../../helpers';
import styles from './styles';

const propTypes = {
  workerType: PropTypes.string.isRequired
};

const defaultProps = {};

const SelectWorker = (props) => {
  const { workerType } = props;

  const [state, setState] = useState({ position: {}, worker: [] });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setState({ ...state, position: position.coords });

        const origin = `${position.coords.latitude} ${position.coords.longitude}`;
        const params = {
          params: {
            origin,
            jenis: workerType,
            limit: 5,
            page: 1,
            berbagiLokasi: true,
            sort: 'berbagiLokasi'
          }
        };

        Api.getWorker(params).then(
          (res) => {
            setState({ ...state, worker: res.nakes });
            console.log('Params  ', params);
            console.log('Fetch success :  ', res);
          },
          (error) => {
            Toast.show({ text: error.message });
          }
        );
      },
      (error) => {
        Toast.show({ text: error.message });
      }
    );
  }, []);

  const backToHome = () => {
    Actions.pop();
  };

  const goToCheckout = (id) => {
    Actions.checkout(id);
  };

  return (
    <Container>
      <Header
        iconName="chevron-back-outline"
        title="Pilih Dokter"
        onPress={backToHome}
      />
      <Content style={styles.cardContainer}>
        {state.worker.map((item, index) => (
          <CardWorker
            key={index}
            name={item.nama}
            photoSource={{ uri: StringBuilder.addBaseURL(item.foto) }}
            price={item.harga}
            distance={item.jarak.teks}
            onPress={() => goToCheckout(123)}
          />
        ))}
      </Content>
    </Container>
  );
};

SelectWorker.propTypes = propTypes;
SelectWorker.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(SelectWorker);
