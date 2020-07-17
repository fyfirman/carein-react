import React from 'react';
import PropTypes from 'prop-types';
import { Label, Item, Input } from 'native-base';

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  onChange: PropTypes.func,
  iconPosition: PropTypes.string,
  name: PropTypes.string.isRequired
};

const defaultProps = {
  label: '',
  icon: null,
  iconPosition: 'left',
  onChange: () => {}
};

const TextInput = (props) => {
  const { label, icon, iconPosition, name, onChange, ...rest } = props;
  return (
    <Item floatingLabel {...rest}>
      <Label>{label}</Label>
      {iconPosition === 'left' ? icon : null}
      <Input onChange={onChange} name={name} />
      {iconPosition === 'right' ? icon : null}
    </Item>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
