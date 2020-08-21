import axios from 'axios';

export const fetchCreateStudy = (data) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', { body: data });
};
