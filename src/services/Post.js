import axios from 'axios';
import { BASE_URL } from './Config';

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

export default Post;
