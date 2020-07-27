import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { PickerInput, TextInput, PairInputText } from '../../component';
import API from '../../services';
import styles from './styles';

const propTypes = {
  registerData: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const RegisterMedicalHistory = (props) => {
  const { registerData } = props;

  const [formState, setFormState] = useState({
    values: {
      ...registerData
    }
  });

  const bloodType = [
    { label: 'AB', value: 'ab' },
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'O', value: 'o' }
  ];

  const goToLogin = () => {
    console.log(formState);
    // Actions.login();
  };

  const postDataToAPI = () => {
    const data = {};

    API.postRegister(data).then((res) => {
      console.log('==================================', res);
    });
  };

  const handleChange = (name, newValue) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: newValue
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Form>
        <TextInput
          label="Berat Badan"
          onChangeText={(newValue) => handleChange('weight', newValue)}
        />
        <TextInput
          label="Tinggi Badan"
          onChangeText={(newValue) => handleChange('height', newValue)}
        />
        <PickerInput label="Golongan Darah" data={bloodType} />
        <PairInputText firstLabel="Tahun" secondLabel="Nama Penyakit" />
        <Button full onPress={goToLogin}>
          <Text>Submit</Text>
        </Button>
      </Form>
    </ScrollView>
  );
};

RegisterMedicalHistory.propTypes = propTypes;
RegisterMedicalHistory.defaultProps = defaultProps;

export default RegisterMedicalHistory;
