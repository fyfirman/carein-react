import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { DatePicker, Label } from 'native-base';

const propTypes = {
  label: PropTypes.string
};

const defaultProps = {
  label: ''
};

const StyledDatePicker = (props) => {
  const { label, ...rest } = props;

  const [chosenDate, setChosenDate] = useState(new Date(1999, 1, 1));

  return (
    <View>
      <Label hidden={label === ''}>{label}</Label>
      <DatePicker
        {...rest}
        minimumDate={new Date(1900, 1, 1)}
        modalTransparent={false}
        animationType="fade"
        androidMode="default"
        placeHolderText="Pilih tanggal"
        textStyle={{ color: 'green' }}
        placeHolderTextStyle={{ color: '#d3d3d3' }}
        onDateChange={setChosenDate}
      />
    </View>
  );
};

StyledDatePicker.propTypes = propTypes;
StyledDatePicker.defaultProps = defaultProps;

export default StyledDatePicker;
