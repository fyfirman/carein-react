import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import {
  Container,
  Text,
  Toast,
  Content,
  Fab,
  Icon,
  Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Api from '../../services';
import { InputModal, CardMedicalHistory } from './components';
import { Header } from '../../components';
import { DateFormatter } from '../../helpers';
import styles from './styles';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const MedicalHistory = (props) => {
  const { user } = props;

  const [state, setState] = useState({
    medicalHistory: [],
    isLoaded: false,
    newValues: {},
    isFabShown: true
  });

  let bottomSheetRef;

  useEffect(() => {
    const fetchMedicalHistory = async () => {
      const params = {
        params: {
          limit: 100,
          page: 1
        }
      };

      Api.getMedicalHitory(user.id, params).then(
        (res) => {
          setState({ medicalHistory: res.riwayatKesehatan, isLoaded: true });
        },
        (error) => {
          setState({ ...state, isLoaded: true });
          Toast.show({ text: error.response.data.message });
        }
      );
    };

    fetchMedicalHistory();
  }, []);

  useEffect(() => {
    console.log(state.medicalHistory.length);
  }, [state]);

  const handleAddMedicalHistory = () => {
    Api.postMedicalHistory(user.id, state.newValues).then(
      (res) => {
        console.log(bottomSheetRef);
        setState({
          ...state,
          medicalHistory: [state.newValues, ...state.medicalHistory]
        });
        Toast.show({
          text: 'Riwayat kesehatan berhasil ditambahkan'
        });
      },
      (error) => {
        Toast.show({
          text: `Telah terjadi error: ${error.response.data.message}`
        });
        bottomSheetRef.close();
      }
    );
  };

  const handleChange = (name, value) => {
    setState({
      ...state,
      newValues: {
        ...state.newValues,
        [name]: value
      }
    });
  };

  const renderCardMedicalHistory = () => {
    if (state.medicalHistory.length !== 0) {
      return state.medicalHistory.map((item, index) => (
        <CardMedicalHistory
          key={index}
          name={item.namaPenyakit}
          date={DateFormatter.getLegibleDate(item.tanggal)}
          onPress={() => bottomSheetRef.open()}
        />
      ));
    }
    return <Text>Tidak ada riwayat kesehatan</Text>;
  };

  return (
    <Container>
      <Header
        iconName="chevron-back-outline"
        title="Riwayat Kesehatan"
        onPress={() => Actions.pop()}
      />
      <Content style={{ flex: 1 }}>
        {!state.isLoaded ? <ActivityIndicator /> : renderCardMedicalHistory()}
      </Content>
      <Button onPress={() => bottomSheetRef.open()} style={styles.fab}>
        <Icon name="add-outline" />
      </Button>
      <InputModal
        refs={(ref) => {
          bottomSheetRef = ref;
        }}
        onDateChange={(value) =>
          handleChange('tanggal', DateFormatter.getShortDate(value))
        }
        onDiseaseChange={(value) => handleChange('namaPenyakit', value)}
        onPressSaveButton={handleAddMedicalHistory}
        onPressCancelButton={() => bottomSheetRef.close()}
      />
    </Container>
  );
};

MedicalHistory.propTypes = propTypes;
MedicalHistory.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(MedicalHistory);
