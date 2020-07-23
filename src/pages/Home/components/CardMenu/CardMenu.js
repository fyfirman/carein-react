import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import styles from './styles';

const propTypes = {
  label: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};

const defaultProps = {
  reverse: false
};

const StyledHeader = (props) => {
  const { label, reverse, ...rest } = props;

  return (
    <Card style={styles.root} {...rest}>
      <CardItem style={styles.content}>
        {reverse && <Text style={styles.label}>{label}</Text>}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </View>
        {!reverse && <Text style={styles.label}>{label}</Text>}
      </CardItem>
    </Card>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
