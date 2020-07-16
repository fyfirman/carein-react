import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Picker, Label, Item } from 'native-base';

const propTypes = {
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

const defaultProps = {
  label: ''
};

const StyledPickerInput = (props) => {
  const { label, data, ...rest } = props;

  const [selected, setSelected] = useState(undefined);

  const handleChange = (newValue) => {
    setSelected(newValue);
  };

  const renderItems = () =>
    data.map((item) => <Picker.Item label={item.label} value={item.value} />);

  return (
    <View>
      <Label hidden={label === ''}>{label}</Label>
      <Item picker>
        <Picker
          {...rest}
          mode="dropdown"
          style={{ width: '100%' }}
          placeholder="Pilih jenis kelamin"
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          selectedValue={selected}
          onValueChange={handleChange}
        >
          {renderItems()}
        </Picker>
      </Item>
    </View>
  );
};

StyledPickerInput.propTypes = propTypes;
StyledPickerInput.defaultProps = defaultProps;

export default StyledPickerInput;
