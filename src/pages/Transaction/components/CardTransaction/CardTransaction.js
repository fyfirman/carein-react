import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { Button, Thumbnail, Card, CardItem, Text } from 'native-base';
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

const CardTransaction = (props) => {
  const { name, date, photoSource, onPress, status } = props;

  const getSubInfo = () => {
    switch (status) {
      case 'pending':
        return 'Sedang menunggu konfirmasi';
      case 'berjalan':
        return 'Tenaga kesehatan akan datang';
      case 'selesai':
        return 'Selesai';
      default:
        return 'Status tidak valid';
    }
  };

  return (
    // <Card style={styles.root}>
    //   <CardItem button style={styles.content}>
    //     <View style={styles.imageContainer}>
    //       <Image style={styles.image} source={photoSource} />
    //     </View>
    //     <View style={styles.information}>
    //       <Text style={styles.name}>{name}</Text>
    //       {status === 'selesai' && <Text style={styles.subinfo}>{date}</Text>}
    //       <Text style={styles.subinfo}>{getSubInfo()}</Text>
    //     </View>
    //     {status !== 'selesai' && (
    //       <Button onPress={onPress}>
    //         <Text>Chat</Text>
    //       </Button>
    //     )}
    //   </CardItem>
    // </Card>
    <View style={styles.card}>
      <View noShadow >
        <CardItem style={styles.bundle}>
          <Thumbnail
            source={photoSource} 
            style={styles.img}
          />
          <View style={styles.subcard}>
            <Text style={styles.textSubcard}>{name}</Text>
            <Text style={styles.doneSubcard}>6 Agustus 2020</Text>
            <Text style={styles.doneSubcard}>
              Rp. 100.000 •
              <Text style={styles.doneInfoSubcard}> Selesai</Text>
            </Text>
          </View>
        </CardItem>
      </View>
    </View>
  );
};

CardTransaction.propTypes = propTypes;
CardTransaction.defaultProps = defaultProps;

export default CardTransaction;
