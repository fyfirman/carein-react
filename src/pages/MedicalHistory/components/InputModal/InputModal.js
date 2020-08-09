import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Button, Icon } from 'native-base';
import BottomSheet from 'react-native-js-bottom-sheet';
import { DatePicker, TextInput } from '../../../../components';
import styles from './styles';

const propTypes = {
  refs: PropTypes.func.isRequired,
  onDiseaseChange: PropTypes.func,
  onDateChange: PropTypes.func
};

const defaultProps = {
  onDiseaseChange: () => {},
  onDateChange: () => {}
};

const StyledBottomSheet = (props) => {
  const { refs, onDiseaseChange, onDateChange } = props;

  return (
    <BottomSheet
      style={styles.bottomsheetDetail}
      ref={refs}
      itemDivider={3}
      backButtonEnabled
      coverScreen={false}
      title="Create"
      isOpen={false}
    >
      <View style={styles.modal}>
        <View style={styles.option}>
          <Button style={styles.btnSuccessDetailThree}>
            <Icon name="trash-outline" style={styles.btnSuccessTextThree} />
          </Button>
        </View>
        <View>
          <TextInput label="Penyakit" onChangeText={onDiseaseChange} />
          <DatePicker label="Tanggal Diderita" onDateChange={onDateChange} />
        </View>
        <View style={styles.btnModal}>
          <Button transparent>
            <Text style={styles.btnModalKembali}>Kembali</Text>
          </Button>
          <Button style={styles.btnModalSimpan}>
            <Text style={styles.btntextModalSimpan}>Simpan</Text>
          </Button>
        </View>
      </View>
    </BottomSheet>
  );
};

StyledBottomSheet.propTypes = propTypes;
StyledBottomSheet.defaultProps = defaultProps;

export default StyledBottomSheet;
