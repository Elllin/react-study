import axios from 'axios';

export const fetchCreateStudy = (data) => {
  return axios.post('http://ec2-3-35-10-76.ap-northeast-2.compute.amazonaws.com/study', {
    body: data,
  });
};
