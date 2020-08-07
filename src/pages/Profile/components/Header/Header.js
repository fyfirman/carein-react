import React from 'react';
import {View,Image, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import { Header,Button, Text,Left,Icon, Right, Title, Subtitle, Thumbnail } from 'native-base';
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
    <View style={{flex:1,flexDirection:'column',position:'relative'}} noShadow {...rest}> 
      <ImageBackground style={styles.background} source={require('../../../../assets/WavyBackground.png')}/>
        <View style={styles.textBundle}>
          <Image style={{width:150,height:150,borderRadius:75}} large source={require('../../../../assets/marcell-white.jpg')} />
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.sub_text}>{username}</Text>
        </View>
        <View style={{position:'absolute',alignSelf:'flex-end'}}>
          <Button transparent>
            <Icon name='create-outline' style={{color:'white',fontSize:36}}/>
          </Button>
        </View>
    </View>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
