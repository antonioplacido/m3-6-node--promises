// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");

require("dotenv").config();
// dont json or parse, its been sent already parsed
const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage.geocode(requestObj);
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));
