import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

export const checkSpecialCharacters = (str) => {
  // eslint-disable-next-line
  const specialPattern = /[`~!@#$%^&*\.,\=(){}+<>\[\]\\\'\";:\/?|]/gi;

  if (specialPattern.test(str)) return true;
  else return false;
};

export const getDday = (startDate, endDate) => {
  const startTime = moment(startDate);
  const endTime = moment(endDate);

  return moment.duration(endTime.diff(startTime)).asDays();
};

export const getDateFormat = (date, format) => {
  return moment(date).format(format);
};
