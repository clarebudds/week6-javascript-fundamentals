const printHello = () => {
  console.log("Hey there");
};

const executeAfterDelay = (delay, printHelloCallback) => {
  setTimeout(printHelloCallback, 5000);
};

executeAfterDelay(5000, printHello);

// Makers solution
// const printHello = () => {
//   console.log("Hey there");
// };

// const executeAfterDelay = (delay, callbackFunction) => {
//   setTimeout(callbackFunction, delay * 1000);
// };

// executeAfterDelay(5, printHello);
