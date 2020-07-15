// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config({ path: __dirname + "../../.env" });

const getAddressFromPosition = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((response) => {
      return response.results[0].formatted;
    })

    .catch((error) => {
      console.log(`error`, error.message);
    });
};

getAddressFromPosition("45.539518, -73.645236").then((response) => {
  console.log(response);
});

// 5 Avenue anatole france = "48.8584", "2.2945"
