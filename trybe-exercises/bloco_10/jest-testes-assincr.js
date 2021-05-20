const createRandomNumber = () => Math.floor(Math.random() * 100);

function uppercaseString(phrase) {
  return phrase.toUppercase();
}

function returnFirstLetter(phrase) {
  return phrase[0];
}

function concatStrings(phrase1, phrase2) {
  return phrase1 + phrase2;
}

module.exports = { createRandomNumber, uppercaseString, returnFirstLetter, concatStrings };