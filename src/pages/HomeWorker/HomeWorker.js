import React, { useEffect, useState } from 'react';
import {
  View,
  Switch,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  Container,
  Toast,
  Left,
  Text,
  Card,
  Right,
  Icon,
  Button,
  CardItem,
  Content
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { StringBuilder, Status, LocationFormatter } from '../../helpers';
import Api from '../../services';
import { UserActions } from '../../redux/actions';
import { OrderStatus } from '../../constant';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  setUser: PropTypes.func.isRequired
};

const defaultProps = {};

const HomeWorker = (props) => {
  const { user, setUser } = props;

  const [state, setState] = useState({
    isLoaded: false,
    userLocation: {},
    sharingLocation: false,
    activeTransaction: {
      status: OrderStatus.INACTIVE
    }
  });

  const patientPosition = {
    latitude: -6.9562084,
    longitude: 107.6119725
  };

  let mapRef;

  useEffect(() => {
    const fetchUser = async () => {
      return Api.getCheckAuth().then(
        (res) => {
          const params = {
            params: {
              id: res.user.id
            }
          };
          Api.getWorker(params).then(
            (data) => {
              setUser(data.nakes[0]);
            },
            (e) => {
              Toast.show({ text: e.message });
            }
          );
        },
        (error) => {
          Toast.show({ text: `Tidak terkoneksi dengan internet` });
          console.log(error);
        }
      );
    };

    const getUserLocation = (data) => {
      Geolocation.getCurrentPosition(
        (position) => {
          setState({
            ...state,
            ...data,
            userLocation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            isLoaded: true
          });
          console.log('userLocation setted', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => Toast.show({ text: error.message }),
        { enableHighAccuracy: false, timeout: 5000 }
      );
    };

    const fetchTransaction = async () => {
      return Api.getTransactionWorker().then(
        (res) => {
          return {
            deposit: {
              income: res.totalPendapatan,
              unpaid: res.totalBelumSetor,
              paid: res.totalTelahSetor
            },
            activeTransaction: {
              ...res.transaksiBerjalan,
              pasienLokasi: LocationFormatter.fromApiToGmaps(
                res.transaksiBerjalan.pasienLokasi
              ),
              status: Status.getStatus(res.transaksiBerjalan.status)
            }
          };
        },
        (error) => {
          Toast.show({ text: error.message });
        }
      );
    };

    fetchUser()
      .then(() => fetchTransaction())
      .then((data) => getUserLocation(data));
  }, []);

  const renderTransactionCard = (status) => {
    switch (status) {
      case OrderStatus.ACTIVE:
        return (
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <View>
                  <View style={styles.subCardOne}>
                    <Text style={styles.nameSubCardOne}>Marcell Antonius</Text>
                    <Text style={styles.statusSubCardOne}>
                      Sedang dalam perjalanan
                    </Text>
                  </View>
                  <View style={styles.btnSubCardOne}>
                    <Button style={styles.btnCancelDetailOne}>
                      <Text style={styles.btnCancelTextOne}>Batalkan</Text>
                    </Button>
                    <Button style={styles.btnSuccessDetailOne}>
                      <Text style={styles.btnSuccessTextOne}>Selesai</Text>
                    </Button>
                  </View>
                </View>
              </Left>
              <Right>
                <Button
                  iconLeft
                  style={styles.chatSubCardOne}
                  onPress={() => Actions.chat()}
                >
                  <Icon name="paper-plane" style={{ fontSize: 10 }} />
                  <Text style={styles.chatTextSubCardOne}>Chat</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        );
      case OrderStatus.INACTIVE:
        return (
          <Card
            style={
              state.sharingLocation ? styles.noInfoCard : styles.noInfoCardOFF
            }
          >
            <View style={styles.noInfoCardBundle}>
              <Text style={styles.noInfoTextCard}>
                {state.sharingLocation
                  ? 'Tidak ada pesan yang masuk'
                  : 'Kamu tidak akan menerima pesanan'}
              </Text>
              <View style={styles.switchCard}>
                <View>
                  <Switch
                    style={{ width: 56, height: 28 }}
                    trackColor={{
                      false: 'rgba(255, 255, 255, 0.5)',
                      true: 'rgba(255, 255, 255, 0.5)'
                    }}
                    thumbColor={state.sharingLocation ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={state.sharingLocation}
                  />
                </View>
                <View>
                  <Text style={styles.textCard}>Terima Pesanan</Text>
                </View>
              </View>
            </View>
          </Card>
        );
      case OrderStatus.PENDING:
        return (
          <Card style={styles.card}>
            <View style={styles.cardBundle}>
              <View style={{ marginLeft: '0%' }}>
                <Text style={styles.nameSubCardOne}>
                  {state.activeTransaction.pasienId}
                </Text>
                <Text style={{ color: 'rgba(6, 44, 60, 0.9)', fontSize: 12 }}>
                  {`${state.activeTransaction.meter} m`}
                </Text>
                <View style={styles.option}>
                  <Button style={styles.btnCancelDetailThree}>
                    <Text style={styles.btnCancelTextThree}>Tolak</Text>
                  </Button>
                  <Button success style={styles.btnSuccessDetailThree}>
                    <Text style={styles.btnSuccessTextThree}>Terima</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
        );

      default:
        return null;
    }
  };

  const toggleSwitch = () =>
    setState({ ...state, sharingLocation: !state.sharingLocation });

  const reCenterMaps = () => {
    const coordinates = [state.userLocation];
    if (Status.validToGetPatientLocation(state.activeTransaction.status)) {
      coordinates.push(state.activeTransaction.pasienLokasi);
    }
    mapRef.fitToCoordinates(coordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true
    });
  };

  const renderMapView = () => {
    return state.isLoaded ? (
      <MapView
        ref={(ref) => {
          mapRef = ref;
        }}
        style={styles.map}
        region={{
          ...state.userLocation,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15
        }}
        onLayout={reCenterMaps}
      >
        <Marker
          coordinate={state.userLocation}
          onMapReady
          title="Lokasi Kamu"
        />
        {Status.validToGetPatientLocation(state.activeTransaction.status) && (
          <Marker
            coordinate={state.activeTransaction.pasienLokasi}
            title="Lokasi Nakes"
          />
        )}
      </MapView>
    ) : (
      <ActivityIndicator />
    );
  };

  return (
    <Container>
      <Content>
        <View style={styles.heading}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Care.In</Text>
          <TouchableOpacity onPress={() => Actions.profile()}>
            <Image
              style={styles.thumbnail}
              source={{ uri: StringBuilder.addBaseURL(user.foto) }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoMoney}>
          <View>
            <Text style={styles.infoMoneyHeader}>Total Pendapatan</Text>
            <Text style={styles.infoMoneyTotal}>
              {state.deposit ? state.deposit.income : '0'}
            </Text>
          </View>
          <View>
            <Text style={styles.infoMoneyHeader}>Uang yang harus disetor</Text>
            <Text style={styles.infoMoneyTotal}>
              {state.deposit ? state.deposit.unpaid : '0'}
            </Text>
          </View>
        </View>

        <View style={styles.map}>{renderMapView()}</View>

        <View style={{ marginHorizontal: 16 }}>
          <View style={styles.subtitle}>
            <Text style={styles.subHeadingLeft}>Pesanan</Text>
            <TouchableOpacity onPress={() => Actions.transaction()}>
              <Text style={styles.subHeadingRight}>Lihat Riwayat</Text>
            </TouchableOpacity>
          </View>
          {renderTransactionCard(state.activeTransaction.status)}
        </View>
      </Content>
    </Container>
  );
};

HomeWorker.propTypes = propTypes;
HomeWorker.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeWorker);
