import Get from './Get';
import Post from './Post';

// Get
const getNakes = (config) => Get('nakes', config);

// Post
const postRegister = (data) => Post('pasien', data);
const postCheckRegister = (data) => Post('pasien?check', data);
const postGenerateToken = (data) => Post('auth?remember=true', data);

const API = {
  getNakes,
  postRegister,
  postCheckRegister,
  postGenerateToken
};

export default API;
