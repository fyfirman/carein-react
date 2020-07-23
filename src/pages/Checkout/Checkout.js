import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Footer, Button, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { Header } from '../../component';
import styles from './styles';

const propTypes = {};

const defaultProps = {};

const mockData = {
  name: 'dr. Lucy Purnama',
  photoSource: 'https://reactnative.dev/img/tiny_logo.png',
  price: 100000,
  distance: 4,
  transportCost: 8000,
  totalPrice: 108000
};

const Checkout = (props) => {
  const { user } = props;

  const backToSelectWorker = () => {
    Actions.pop();
  };

  return (
    <Container>
      <Header iconName="back" title="Pembayaran" onPress={backToSelectWorker} />
      <Content>
        <Image style={styles.photos} source={{ uri: mockData.photoSource }} />
        <Text>{mockData.name}</Text>
        <Text>{`Harga : ${mockData.price}`}</Text>
        <Text>{`Jarak : ${mockData.distance}`}</Text>
        <View>
          <Text>See in maps</Text>
          <MapView
            style={styles.mapView}
            showsUserLocation
            region={{
              latitude: -6.953215215081733,
              longitude: 107.68519169510188,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
          />
        </View>
        <Text>{`Total : ${mockData.totalPrice}`}</Text>
      </Content>
      <Footer>
        <Button>
          <Text>Order</Text>
        </Button>
      </Footer>
    </Container>
  );
};

Checkout.propTypes = propTypes;
Checkout.defaultProps = defaultProps;

export default Checkout;
