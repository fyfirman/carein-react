import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Container, List, Card, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from './styles';
import { Header, ProfileItem, Riwayat } from './components';

const propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const Profile = (props) => {
  const { user } = props;

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container>
      <Content>
        <Header
          name={user.nama}
          username={user.username}
          onEditPress={() => Actions.editProfile({ id: user.id })}
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
              title="Telpon"
              item={user.noTelp}
              icon="call-outline"
              color="red"
            />
            <ProfileItem
              title="Berat Badan"
              item={`${user.beratBadan} kg`}
              icon="man-outline"
              color="yellow"
            />
            <ProfileItem
              title="Tinggi Badan"
              item={`${user.beratBadan} cm`}
              icon="resize-outline"
              color="green"
            />
          </List>
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
          <Card>
            <Riwayat penyakit="Sakit Jantung" tanggal="Agustus 2020" />
            <Riwayat penyakit="Sakit Jantung" tanggal="Agustus 2020" />
            <Riwayat penyakit="Sakit Jantung" tanggal="Agustus 2020" />
          </Card>
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
