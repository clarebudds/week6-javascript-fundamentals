const getNumberSign = (number) => {
  if (number === 0) {
    return "zero";
  } else if (number > 0) {
    return "positive";
  } else {
    return "negative";
  }
};

module.exports = getNumberSign;

// if number is positive, return positive
// if number is negative, return negative
// if number is zero, return zero
