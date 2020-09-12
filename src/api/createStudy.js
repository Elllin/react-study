import axios from 'axios';

export const fetchCreateStudy = (data) => {
  debugger;
  return axios.post('https://jsonplaceholder.typicode.com/posts', {
    body: data,
  });
};
// export const fetchCreateStudy = (data) => {
//   return axios.post('http://ec2-13-125-153-253.ap-northeast-2.compute.amazonaws.com/study', {
//     body: data,
//   });
// };
