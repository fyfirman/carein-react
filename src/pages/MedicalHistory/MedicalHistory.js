import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { Container, Text, Card, Button, Toast, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import BottomSheet from 'react-native-js-bottom-sheet';
import Api from '../../services';
import { CardMedicalHistory } from './components';
import { Header, DatePicker, PickerInput, TextInput } from '../../components';
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
    isLoaded: false
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
        <BottomSheet
          style={styles.bottomsheetDetail}
          ref={(ref) => {
            bottomSheetRef = ref;
          }}
          itemDivider={3}
          backButtonEnabled
          coverScreen={false}
          title="Create"
          isOpen={false}
        >
          <View style={styles.modal}>
            <View style={styles.option}>
              <Button style={styles.btnSuccessDetailThree}>
                <Icon name="trash-outline" style={styles.btnSuccessTextThree} />
              </Button>
            </View>
            <View>
              <TextInput label="Penyakit" />
              <DatePicker label="Tanggal Diderita" />
            </View>
            <View style={styles.btnModal}>
              <Button transparent>
                <Text style={styles.btnModalKembali}>Kembali</Text>
              </Button>
              <Button style={styles.btnModalSimpan}>
                <Text style={styles.btntextModalSimpan}>Simpan</Text>
              </Button>
            </View>
          </View>
        </BottomSheet>
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
