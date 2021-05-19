//Exercicio 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

//Exericio 2
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

//Exericio 6
const animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myAnimal = animals.filter((animal) => animal.name === name);
      if (myAnimal.length !== 0) {
        return resolve(myAnimal);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
};

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal[0]);
};

module.exports = { uppercase, getUserName, getRepos, getAnimal };