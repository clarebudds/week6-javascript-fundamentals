const notifyByEmail = (email) => {
  return "Email sent to:" + email;
};

const notifyByText = (phoneNumber) => {
  return "Text sent to:" + phoneNumber;
};

const notify = (email, notifyFunction) => {
  return notifyFunction(email);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));

// Makers solution using template literals
// const notifyByEmail = (email) => {
//   return `Email sent to: ${email}`;
// }

// const notifyByText = (phoneNumber) => {
//   return `Text sent to: ${phoneNumber}`;
// }

// const notify = (emailOrPhone, notifyFunction) => {
//   return notifyFunction(emailOrPhone);
// }

// console.log(notify('hello@makers.tech.test', notifyByEmail));
// console.log(notify('+10000000000', notifyByText));
