import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Button, Card, CardItem, Text } from 'native-base';
import styles from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  status: PropTypes.string,
  photoSource: PropTypes.objectOf(PropTypes.string).isRequired,
  onPress: PropTypes.func.isRequired
};

const defaultProps = {
  date: '',
  status: 'off'
};

const CardWorker = (props) => {
  const { name, date, photoSource, onPress, status } = props;

  return (
    <Card style={styles.root}>
      <CardItem button style={styles.content} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={photoSource} />
        </View>
        <View style={styles.information}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subinfo}>
            {status !== 'off' ? 'Sedang dalam pemeriksaan' : date}
          </Text>
        </View>
        {status !== 'off' && (
          <Button>
            <Text>Chat</Text>
          </Button>
        )}
      </CardItem>
    </Card>
  );
};

CardWorker.propTypes = propTypes;
CardWorker.defaultProps = defaultProps;

export default CardWorker;
