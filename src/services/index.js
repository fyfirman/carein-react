import axios from 'axios';

const BASE_URL = 'http://192.168.1.7:5000/api/v1';

const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

const Post = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/${path}`, data).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

// Post
const postRegister = (data) => Post('pasien', data);

const API = {
  postRegister
};

export default API;
