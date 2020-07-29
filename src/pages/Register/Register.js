import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Text, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import validate from 'validate.js';
import { Header, DatePicker, PickerInput, TextInput } from '../../component';
import styles from './styles';
import { getShortDate } from '../../util';
import schema from './schema';

const Register = () => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      jk: 'l'
    },
    errors: {},
    touched: {}
  });

  useEffect(() => {
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

  const backToLogin = () => {
    Actions.pop();
  };

  const goToMedicalHistory = () => {
    Actions.registerMedicalHistory({ registerData: parseData() });
  };

  const hasError = (field) =>
    !!(formState.touched[field] && formState.errors[field]);

  const handleChange = (name, newValue) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: newValue
      },
      touched: {
        ...formState.touched,
        [name]: true
      }
    });
  };

  return (
    <Container>
      <Header iconName="back" title="Pendaftaran" onPress={backToLogin} />
      <Content style={styles.container}>
        <Form style={styles.loginForm}>
          <TextInput
            label="Nama Lengkap"
            onChangeText={(newValue) => handleChange('nama', newValue)}
            alertText={hasError('nama') ? formState.errors.nama[0] : null}
            autoFocus
          />
          <TextInput
            label="Tempat Lahir"
            onChangeText={(newValue) => handleChange('tempatLahir', newValue)}
            alertText={
              hasError('tempatLahir') ? formState.errors.tempatLahir[0] : null
            }
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
            keyboardType="phone-pad"
            onChangeText={(newValue) => handleChange('noTelp', newValue)}
            alertText={hasError('noTelp') ? formState.errors.noTelp[0] : null}
          />
          <TextInput
            label="Email"
            keyboardType="email-address"
            onChangeText={(newValue) => handleChange('email', newValue)}
            alertText={hasError('email') ? formState.errors.email[0] : null}
          />
          <TextInput
            label="Username"
            onChangeText={(newValue) => handleChange('username', newValue)}
            alertText={
              hasError('username') ? formState.errors.username[0] : null
            }
          />
          <TextInput
            label="Password"
            secureTextEntry
            onChangeText={(newValue) => handleChange('password', newValue)}
            alertText={
              hasError('password') ? formState.errors.password[0] : null
            }
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry
            onChangeText={(newValue) =>
              handleChange('confirmPassword', newValue)}
            alertText={
              hasError('confirmPassword')
                ? formState.errors.confirmPassword[0]
                : null
            }
          />
          <Button
            full
            onPress={goToMedicalHistory}
            disabled={!formState.isValid}
          >
            <Text>Next</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
