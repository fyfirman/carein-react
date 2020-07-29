import Get from './Get';
import Post from './Post';

// Post
const postRegister = (data) => Post('pasien', data);
const postCheckRegister = (data) => Post('pasien?check', data);
const postGenerateToken = (data) => Post('auth?remember=true', data);

const API = {
  postRegister,
  postCheckRegister,
  postGenerateToken
};

export default API;
