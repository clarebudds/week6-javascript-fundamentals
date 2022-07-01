const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

const namesForPromo = (namesAndDiscounts) => {
  return `Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best candies for you today!`;
};

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(namesForPromo);
};

// Should generate messages below:
// generateMessages(namesAndDiscounts);
// [
//   "Hi Anna! 50% off our best candies for you today!",
//   "Hi Laura! 40% off our best candies for you today!",
//   "Hi Josh! 30% off our best candies for you today!",
//   "Hi Min! 50% off our best candies for you today!",
//   "Hi Karla! 60% off our best candies for you today!",
// ];
