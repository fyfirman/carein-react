import SPACING from '../../theme/Spacing';

const CONST = {
  LOGO_SIZE: 64
};

module.exports = {
  photos: {
    width: CONST.LOGO_SIZE,
    height: CONST.LOGO_SIZE,
    borderRadius: 100
  },

  formContainer: {
    height: '75%',
    paddingTop: CONST.LOGO_SIZE / 2 + 20,
    paddingLeft: SPACING.PADDING_HORIZONTAL,
    paddingRight: SPACING.PADDING_HORIZONTAL
  },

  loginForm: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  separator: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  registerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};
