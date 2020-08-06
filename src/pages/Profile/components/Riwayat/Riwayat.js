import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { Text,CardItem, Body, Title,Subtitle } from 'native-base';
import styles from './styles';

const propTypes = {
  penyakit: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'User'
};

const StyledHeader = (props) => {
  const { penyakit,tanggal, ...rest } = props;

  return (
    <CardItem>
      <Body style={styles.root}>
        <View style={styles.bubble}>
        <Title style={{color:'white'}}>{penyakit}</Title>
        <Subtitle style={{color:'white'}}>{tanggal}</Subtitle>
        </View>
      </Body>
    </CardItem>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
