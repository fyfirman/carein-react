import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Form, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { DatePicker, PickerInput, TextInput } from '../../component';
import styles from './styles';

const Register = () => {
  const [formState, setFormState] = useState({
    values: {
      jk: 'l'
    }
  });

  const genderData = [
    { label: 'Laki-Laki', value: 'l' },
    { label: 'Perempuan', value: 'p' }
  ];

  const goToMedicalHistory = () => {
    Actions.registerMedicalHistory({ registerData: formState.values });
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
        <Button full onPress={goToMedicalHistory}>
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
