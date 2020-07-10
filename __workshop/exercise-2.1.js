// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const testGreeting = () => {
  return request("<API_URL") // 1
    .then((response) => {
      return JSON.parse(response); // 2  // on front end with HTML + script- scripts you use response.json();
    })
    .then((parsedResponse) => {
      return; // 3
    })
    .catch((err) => console.log("Error: ", err));
};

testGreeting().then((result) => console.log(result));

//
