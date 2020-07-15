// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config({ path: __dirname + "../../.env" });

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((response) => response.results[0].geometry)

    .catch((error) => {
      console.log(`error`, error.message);
    });
};

getPositionFromAddress(
  "8752 rue Waverly, Montréal, QC H2N 1T6"
).then((response) => console.log(response));

// DONE?
