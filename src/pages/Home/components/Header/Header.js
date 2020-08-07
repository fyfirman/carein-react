import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import { Header, Text,Button, Icon ,Left, Right } from 'native-base';
import styles from './styles';

const propTypes = {
  name: PropTypes.string
};

const defaultProps = {
  name: 'User'
};

const StyledHeader = (props) => {
  const { name, ...rest } = props;

  return (
    <View style={{flex:1,flexDirection:'column',position:'relative'}} noShadow {...rest}> 
      <ImageBackground style={styles.background} source={require('../../../../assets/WavyBackground.png')}/>
        <View style={styles.textBundle}>
          <Text style={styles.text}>{`Halo ${name}`}</Text>
          <Text style={styles.welcomeText}>Kami siap datang membantu!</Text>
        </View>
        <View style={{position:'absolute',alignSelf:'flex-end'}}>
          <Button transparent>
            <Icon name='person-circle-outline' style={{color:'white',fontSize:36}}/>
          </Button>
        </View>
    </View>
    // <Header style={styles.root} noShadow {...rest}>
    //     <ImageBackground style={styles.background} source={require('../../../../assets/WavyBackground.png')}/>
    //     <Left>
    //       <Image style={styles.image} source={require('../../../../assets/nurse.png')} />
    //     </Left>
    //     <Right>
    //       <Text style={styles.text}>{`Halo ${name}\nSelamat datang!`}</Text>
    //     </Right>
    // </Header>
  );
};

StyledHeader.propTypes = propTypes;
StyledHeader.defaultProps = defaultProps;

export default StyledHeader;
