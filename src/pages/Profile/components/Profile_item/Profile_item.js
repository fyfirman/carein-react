import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { Text,Left, Body, Thumbnail, ListItem } from 'native-base';
import styles from './styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  imageSource: PropTypes.objectOf(PropTypes.string).isRequired,
};

const defaultProps = {
  name: 'User'
};

const StyledHeader = (props) => {
  const { title,item,imageSource, ...rest } = props;

  return (
    <ListItem avatar>
      <Left>
        <Thumbnail style={{width:30,height:30,marginVertical:5}} source={imageSource} />
      </Left>
      <Body style={{marginLeft:'8%'}}>
        <Text style={{color:'grey'}}>{title}</Text>
        <Text note style={{color:'black'}}>{item}</Text>
      </Body>
    </ListItem>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
