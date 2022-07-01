const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generateMessages = (namesForPromo) => {
  return namesForPromo.map((name) => {
    return "Hi " + name + "!" + " 50% off our best candies for you today!";
  });
};

module.exports = generateMessages;

// Can also use a template literal:
// const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

// const generateMessages = (namesForPromo) => {
//   return namesForPromo.map((name) => {
//     return `Hi " ${name}! 50% off our best candies for you today!`;
//   });
// };

// module.exports = generateMessages;
