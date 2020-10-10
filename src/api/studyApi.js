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
  return axios.post(`${process.env.REACT_APP_BASE_URL}/study`, JSON.stringify(data), options);
};

export const fetchStudyList = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/study`);
};

export const fetchStudyDetail = (id) => {
  console.log(id)
  return axios.get(`${process.env.REACT_APP_BASE_URL}/study/${id}`);
};
