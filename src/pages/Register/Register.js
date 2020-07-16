import React from 'react';
import { ScrollView } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { DatePicker, PickerInput } from '../../component';
import styles from './Styles';

const Register = () => {
  const genderData = [
    { label: 'Laki-Laki', value: 'l' },
    { label: 'Perempuan', value: 'p' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Form style={styles.loginForm}>
        <Item inlineLabel>
          <Label>Nama Lengkap</Label>
          <Input />
        </Item>
        <Item>
          <DatePicker label="Tanggal Lahir" />
        </Item>
        <Item inlineLabel>
          <PickerInput label="Jenis Kelamin" data={genderData} />
        </Item>
        <Button full>
          <Text>Sign In</Text>
        </Button>
      </Form>
    </ScrollView>
  );
};

Register.navigationOptions = {
  title: 'Informasi Pribadi'
};

export default Register;
