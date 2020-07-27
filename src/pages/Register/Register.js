import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Form, Button, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import validate from 'validate.js';
import { DatePicker, PickerInput, TextInput } from '../../component';
import styles from './styles';
import { getShortDate } from '../../util';
import schema from './schema';

const Register = () => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      jk: 'l'
    },
    errors: {}
  });

  useEffect(() => {
    console.log(formState.errors);
    console.log(formState.values);
    const errors = validate(formState.values, schema);

    setFormState(() => ({
      ...formState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  const genderData = [
    { label: 'Laki-Laki', value: 'l' },
    { label: 'Perempuan', value: 'p' }
  ];

  const parseData = () => {
    const parsedData = {
      ...formState.values,
      tglLahir: getShortDate(formState.values.tglLahir)
    };

    return parsedData;
  };

  const goToMedicalHistory = () => {
    Actions.registerMedicalHistory({ registerData: parseData() });
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
      <Form style={styles.loginForm}>
        <TextInput
          label="Nama Lengkap"
          onChangeText={(newValue) => handleChange('nama', newValue)}
        />
        <TextInput
          label="Tempat Lahir"
          onChangeText={(newValue) => handleChange('tempatLahir', newValue)}
        />
        <DatePicker
          label="Tanggal Lahir"
          onDateChange={(newValue) => handleChange('tglLahir', newValue)}
        />
        <PickerInput
          label="Jenis Kelamin"
          data={genderData}
          onValueChange={(newValue) => handleChange('jk', newValue)}
          selectedValue={formState.values.jk}
        />
        <TextInput
          label="No telepon"
          onChangeText={(newValue) => handleChange('noTelp', newValue)}
        />
        <TextInput
          label="Email"
          onChangeText={(newValue) => handleChange('email', newValue)}
        />
        <TextInput
          label="Username"
          onChangeText={(newValue) => handleChange('username', newValue)}
        />
        <TextInput
          label="Password"
          onChangeText={(newValue) => handleChange('password', newValue)}
        />
        <TextInput
          label="Confirm Password"
          onChangeText={(newValue) => handleChange('confirmPassword', newValue)}
        />
        <Button full onPress={goToMedicalHistory} disabled={!formState.isValid}>
          <Text>Next</Text>
        </Button>
      </Form>
    </ScrollView>
  );
};

Register.navigationOptions = {
  title: 'Informasi Pribadi'
};

export default Register;
