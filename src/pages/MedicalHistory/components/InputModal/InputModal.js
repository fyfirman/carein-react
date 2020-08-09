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
  onDateChange: PropTypes.func,
  onPressSaveButton: PropTypes.func,
  onPressCancelButton: PropTypes.func,
  onPressDeleteButton: PropTypes.func
};

const defaultProps = {
  onDiseaseChange: () => {},
  onDateChange: () => {},
  onPressSaveButton: () => {},
  onPressCancelButton: () => {},
  onPressDeleteButton: () => {}
};

const StyledBottomSheet = (props) => {
  const {
    refs,
    onDiseaseChange,
    onDateChange,
    onPressSaveButton,
    onPressCancelButton,
    onPressDeleteButton
  } = props;

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
          <Button
            style={styles.btnSuccessDetailThree}
            onPress={onPressDeleteButton}
          >
            <Icon name="trash-outline" style={styles.btnSuccessTextThree} />
          </Button>
        </View>
        <View>
          <TextInput label="Penyakit" onChangeText={onDiseaseChange} />
          <DatePicker label="Tanggal Diderita" onDateChange={onDateChange} />
        </View>
        <View style={styles.btnModal}>
          <Button transparent onPress={onPressCancelButton}>
            <Text style={styles.btnModalKembali}>Kembali</Text>
          </Button>
          <Button style={styles.btnModalSimpan} onPress={onPressSaveButton}>
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
