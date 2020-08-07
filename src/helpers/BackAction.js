import { BackHandler, Alert } from 'react-native';

const builder = (
  object = {
    title: '',
    description: '',
    yesLabel: '',
    noLabel: '',
    onPress: () => {}
  }
) => {
  Alert.alert(object.title, object.description, [
    {
      text: object.noLabel,
      onPress: () => null,
      style: 'cancel'
    },
    { text: object.yesLabel, onPress: () => null }
  ]);
  return true;
};

const exit = () =>
  builder({
    title: 'Tunggu dulu',
    description: 'Apakah kamu yakin akan keluar?',
    yesLabel: 'Iya',
    noLabel: 'Kembali',
    onPress: () => {
      BackHandler.exitApp();
    }
  });

const BackAction = {
  builder,
  exit
};

export default BackAction;
