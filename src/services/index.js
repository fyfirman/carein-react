import Get from './Get';
import Post from './Post';

// Post
const postRegister = (data) => Post('pasien', data);
const postCheckRegister = (data) => Post('pasien?check', data);

const API = {
  postRegister,
  postCheckRegister
};

export default API;
