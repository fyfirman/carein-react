import get from './get';
import post from './post';
import config from './config';

// Get
const getNakes = async () => get('nakes', await config.withToken());
const getCheckAuth = async () => get('auth', await config.withToken());
const getUser = async (id) => get(`pasien/${id}`, await config.withToken());

// Post
const postRegister = (data) => post('pasien', data);
const postCheckRegister = (data) => post('pasien?check', data);
const postGenerateToken = (data) => post('auth?remember=true', data);

const Api = {
  getNakes,
  getCheckAuth,
  getUser,
  postRegister,
  postCheckRegister,
  postGenerateToken
};

export default Api;
