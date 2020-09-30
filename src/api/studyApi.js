import axios from 'axios';

// export const fetchCreateStudy = (data) => {
//   debugger;
//   return axios.post('https://jsonplaceholder.typicode.com/posts', {
//     body: data,
//   });
// };
const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchCreateStudy = (data) => {
  return axios.post(
    'http://ec2-13-125-153-253.ap-northeast-2.compute.amazonaws.com/study',
    JSON.stringify(data),
    options,
  );
};

export const fetchStudyDetail = (id) => {
  return axios.get(`http://ec2-13-125-153-253.ap-northeast-2.compute.amazonaws.com/study/${id}`);
};
