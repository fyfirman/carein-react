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
    <CardItem style={{elevation:10}}>
      <Body style={styles.root}>
        <View style={styles.bubble}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'rgba(6, 44, 60, 0.9)'}}>{penyakit}</Text>
        <Text style={{fontSize:12,color:'rgba(6, 44, 60, 0.9)'}}>{tanggal}</Text>
        </View>
      </Body>
    </CardItem>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
