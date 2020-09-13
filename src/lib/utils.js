export const checkSpecialCharacters = (str) => {
  // eslint-disable-next-line
  const specialPattern = /[`~!@#$%^&*\.,\=(){}+<>\[\]\\\'\";:\/?|]/gi;

  if (specialPattern.test(str)) return true;
  else return false;
};
