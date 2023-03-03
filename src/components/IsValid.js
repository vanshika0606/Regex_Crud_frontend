const isValid = (expression) => {
  var isValid = true;

  try {
    new RegExp(expression);
  } catch (e) {
    isValid = false;
  }

  return isValid;
};

export default isValid;
