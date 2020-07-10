// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const checkStrings = (word) => {
  if (typeof word === "string") {
    return true;
  }
};

const upperCase = (word) => {
  return word.toUpperCase();
};

const makeAllCaps = (array) => {
  uppercasePromise = new Promise((resolve, reject) => {
    if (array.every(checkStrings)) {
      resolve(array.map(upperCase));
    } else {
      reject(`is not a string`);
    }
  });
  return uppercasePromise;
};

const sortWords = (array) => {
  array.sort();
  return array;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
