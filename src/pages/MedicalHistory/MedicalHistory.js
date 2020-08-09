import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { Container, Text, Toast } from 'native-base';
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
    newValues: {}
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
    console.log(state);
  }, [state]);

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

      <View style={styles.bottomsheet}>
        <View>
          {!state.isLoaded ? <ActivityIndicator /> : renderCardMedicalHistory()}
        </View>
        <View style={styles.container}>
          <View style={styles.fab}>
            <TouchableOpacity onPress={() => bottomSheetRef.open()}>
              <View style={styles.containt}>
                <View style={{ paddingLeft: '30%' }}>
                  <Text style={styles.textContaint}>+</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <InputModal
          refs={(ref) => {
            bottomSheetRef = ref;
          }}
          onDateChange={(value) =>
            handleChange('date', DateFormatter.getShortDate(value))}
          onDiseaseChange={(value) => handleChange('disease', value)}
        />
      </View>
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
