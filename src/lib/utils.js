import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

export const checkSpecialCharacters = (str) => {
  // eslint-disable-next-line
  const specialPattern = /[`~!@#$%^&*\.,\=(){}+<>\[\]\\\'\";:\/?|]/gi;
  return specialPattern.test(str);
};

export const getDday = (endDate) => {
  const startTime = moment(new Date());
  const endTime = moment(endDate);
  const diff = endTime.diff(startTime, 'days');
  return diff + 1;
};

export const getDateFormat = (date, format) => {
  return moment(date).format(format);
};
