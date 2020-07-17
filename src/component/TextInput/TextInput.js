import React from 'react';
import PropTypes from 'prop-types';
import { Label, Item, Input } from 'native-base';

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  handleChange: PropTypes.func,
  iconPosition: PropTypes.string
};

const defaultProps = {
  label: '',
  icon: null,
  iconPosition: 'left',
  handleChange: () => {}
};

const TextInput = (props) => {
  const { label, icon, iconPosition, handleChange, ...rest } = props;
  return (
    <Item floatingLabel {...rest}>
      <Label>{label}</Label>
      {iconPosition === 'left' ? icon : null}
      <Input handleChange={handleChange} />
      {iconPosition === 'right' ? icon : null}
    </Item>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
