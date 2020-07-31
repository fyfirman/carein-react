import React, { useState, useEffect } from 'react';
import { Container, Content, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Header } from '../../components';
import { CardHistory } from './components';
import Api from '../../services';
import mockData from './mockData';

const propTypes = {};

const defaultProps = {};

const History = () => {
  const [state, setState] = useState({ history: [] });

  useEffect(() => {
    const fetchHistory = async () => {
      const params = {
        params: {
          limit: 5,
          page: 1
        }
      };

      Api.getHistory(params).then(
        (res) => {
          setState({ history: res.riwayatTransaksi });
        },
        (error) => {
          Toast.show({ text: error.message });
        }
      );
    };

    fetchHistory();
  }, []);

  return (
    <Container>
      <Header
        iconName="chevron-back-outline"
        title="Riwayat"
        onPress={() => Actions.pop()}
      />
      <Content>
        {mockData.map((element, index) => (
          <CardHistory
            key={index}
            name={element.name}
            photoSource={{ uri: element.photoSource }}
            status={element.status}
            date={element.date}
            onPress={() => Actions.chat()}
          />
        ))}
      </Content>
    </Container>
  );
};

History.propTypes = propTypes;
History.defaultProps = defaultProps;

export default History;
