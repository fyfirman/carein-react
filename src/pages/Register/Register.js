import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Form, Button, Text } from 'native-base';
import { DatePicker, PickerInput, TextInput } from '../../component';
import styles from './Styles';

const Register = () => {
  const [formState, setFormState] = useState({
    values: {}
  });

  const genderData = [
    { label: 'Laki-Laki', value: 'l' },
    { label: 'Perempuan', value: 'p' }
  ];

  const handleChange = (event) => {
    event.persist();

    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Form style={styles.loginForm}>
        <TextInput label="Nama Lengkap" name="name" onChange={handleChange} />
        <DatePicker label="Tanggal Lahir" />
        <PickerInput label="Jenis Kelamin" data={genderData} />
        <TextInput label="No telepon" name="phone" onChange={handleChange} />
        <TextInput label="Email" name="email" onChange={handleChange} />
        <TextInput label="Username" name="username" onChange={handleChange} />
        <TextInput label="Password" name="password" onChange={handleChange} />
        <TextInput
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button full>
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
