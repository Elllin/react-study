import axios from 'axios';

export const fetchDuplicationCheck = (data) => {
  console.log(data);
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchCreateStudy = (data) => {
  return axios.post(process.env.REACT_APP_BASE_URL, JSON.stringify(data), options);
};

export const fetchStudyDetail = (id) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`);
};
