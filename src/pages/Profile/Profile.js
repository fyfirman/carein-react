import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Container, List, Card, Content, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LocalStorage, StringBuilder } from '../../helpers';
import Api from '../../services';
import styles from './styles';
import { Header, ProfileItem, Riwayat } from './components';
import { UserType } from '../../constant';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Profile = (props) => {
  const { user } = props;

  const [state, setState] = useState({
    medicalHistory: []
  });

  const [userType, setUserType] = useState(UserType.PATIENT);

  useEffect(() => {
    LocalStorage.getUserType().then((newUserType) => {
      setUserType(newUserType);
    });
  }, []);

  useEffect(() => {
    const fetchMedicalHistory = async () => {
      const params = {
        params: {
          limit: 2,
          page: 1
        }
      };
      Api.getMedicalHitory(user.id, params).then(
        (res) => {
          setState({ medicalHistory: res.riwayatKesehatan });
        },
        (error) => {
          Toast.show({ text: error.response.data.message });
        }
      );
    };

    if (userType === UserType.PATIENT) {
      fetchMedicalHistory();
    }
  }, [userType]);

  return (
    <Container>
      <Content>
        <Header
          name={user.nama}
          username={user.username}
          onEditPress={() => Actions.editProfile({ id: user.id })}
          onBackPress={() => Actions.pop()}
        />
        <View style={styles.containter}>
          <List style={{ marginTop: 10 }}>
            <ProfileItem
              title="Email"
              item={user.email}
              icon="mail-outline"
              warna="blue"
            />
            <ProfileItem
              title="Nomor Telepon"
              item={user.noTelp}
              icon="call-outline"
              color="red"
            />

            {userType === UserType.PATIENT && (
              <View>
                <ProfileItem
                  title="Berat Badan"
                  item={`${user.beratBadan} kg`}
                  icon="man-outline"
                  color="yellow"
                />
                <ProfileItem
                  title="Tinggi Badan"
                  item={`${user.tinggiBadan} cm`}
                  icon="resize-outline"
                  color="green"
                />
              </View>
            )}

            {userType === UserType.WORKER && (
              <View>
                <ProfileItem
                  title="Profesi"
                  item={`${StringBuilder.capitalizeLetter(user.jenis)}`}
                  icon="medkit-outline"
                  color="green"
                />
                <ProfileItem
                  title="Harga"
                  item={`Rp. ${user.harga}`}
                  icon="cash-outline"
                  color="green"
                />
              </View>
            )}
          </List>

          {userType === UserType.PATIENT && (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginTop: 30,
                  marginBottom: '3%',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                  Riwayat Kesehatan
                </Text>
                <TouchableOpacity onPress={() => Actions.medicalHistory()}>
                  <Text style={{ fontSize: 14 }}>Lihat Semua</Text>
                </TouchableOpacity>
              </View>

              <Card style={styles.cardBundle}>
                {state.medicalHistory.map((item) => (
                  <Riwayat
                    index={item.id}
                    penyakit={item.namaPenyakit}
                    tanggal={item.tanggal}
                  />
                ))}
              </Card>
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(Profile);
