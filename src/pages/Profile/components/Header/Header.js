import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { Header, Text,Left, Right, Title, Subtitle } from 'native-base';
import styles from './styles';

const propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
};

const defaultProps = {
  name: 'User'
};

const StyledHeader = (props) => {
  const { name,username, ...rest } = props;

  return (
    <Header style={styles.root} noShadow {...rest}>
      <View style={styles.sub_header}>
        <Image style={styles.image} source={require('../../../../assets/marcell-white.jpg')} />
        <View style={{backgroundColor:'#E3292A',width:'5%',marginLeft:'85%',marginTop:'-5%',height:'25%',position:'absolute',borderRadius:25}}>
          <Text style={{fontSize:13,textAlign:'center',paddingLeft:10,paddingRight:10, color:'white' }}>Edit</Text>
        </View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.sub_text}>{username}</Text>
           
      </View>
    </Header>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
