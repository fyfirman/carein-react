import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Button, Text } from 'native-base';
import { PickerInput, TextInput } from '../../component';
import styles from './styles';

const propTypes = {
  registerData: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const RegisterMedicalHistory = (props) => {
  const { registerData } = props;

  const [formState, setFormState] = useState({
    registerData,
    values: {}
  });

  const bloodType = [
    { label: 'AB', value: 'ab' },
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'O', value: 'o' }
  ];

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
      <Form style={styles.loginForm}>
        <TextInput
          label="Berat Badan"
          onChangeText={(newValue) => handleChange('weight', newValue)}
        />
        <TextInput
          label="Tinggi Badan"
          onChangeText={(newValue) => handleChange('height', newValue)}
        />
        <PickerInput label="Golongan Darah" data={bloodType} />
        <Button full>
          <Text>Submit</Text>
        </Button>
      </Form>
    </ScrollView>
  );
};

RegisterMedicalHistory.propTypes = propTypes;
RegisterMedicalHistory.defaultProps = defaultProps;

export default RegisterMedicalHistory;
