// Exercise 3.1 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

// require the 'request-promise' module.

// Returns the current position of the ISS

let newAbr = {};

const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((coordinates) => JSON.parse(coordinates))
    .then((parsedCoordinates) => {
      let lats = parsedCoordinates.iss_position.latitude;
      let long = parsedCoordinates.iss_position.longitude;
      newAbr.lat = lats;
      newAbr.lng = long;
      return newAbr;
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

getIssPosition().then((result) => console.log(result));
