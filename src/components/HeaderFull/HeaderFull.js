import React from 'react';
import PropTypes from 'prop-types';
import { Header, Text, Title, Button, Left, Right, Body, Icon } from 'native-base';
import styles from './styles';

const propTypes = {
  iconName: PropTypes.string.isRequired,
  iconNameRight: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const defaultProps = {};

const StyledHeader = (props) => {
  const { iconName,iconNameRight, onPress, title } = props;

  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={onPress}>
          <Icon name={iconName} style={styles.icon}/>
        </Button>
      </Left>
      <Body style={styles.body}>
        <Text style={styles.text}>{title}</Text>
      </Body>
      <Right>
        <Button transparent onPress={onPress}>
          <Icon name={iconNameRight} style={styles.iconRight}/>
        </Button>
      </Right>
    </Header>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
