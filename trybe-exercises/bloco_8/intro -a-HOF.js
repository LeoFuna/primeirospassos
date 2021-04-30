//Exercicio 1


const newEmployees = () => {
  const employees = {
    id1: newPerson('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: newPerson('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: newPerson('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};


const newPerson = nome => {
  const person = {nomeCompleto: nome, email: `${nome.replace(" ", "_").toLowerCase()}@.trybe.com`};
  return person;
}

console.log(newEmployees());

//Exercicio 2

const resultSorteio = (aposta, checkNumber) => {
  return checkNumber(aposta) === true ? 'Parabéns, você ganhou!' : 'Tente novamente';
}

const checkNumber = (number) => {
  return Math.floor(Math.random() * 5 + 1) === number ? true : false; 
}

console.log(resultSorteio(3, checkNumber));

//BONUS ---------------------------------------------------------

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) => {
  return Math.ceil(Math.random() * (dragon.strength - 15)) + 15;
}

const damageWarrior = (warrior) => {
  return Math.ceil(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;
}

const damageMage = (mage) => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  } else {
    const mageTurn = {
      damage: Math.ceil(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence,
      manaCost: 15 
    }
    return mageTurn;
  }
}

const warriorTurn = (damageWarrior) => {
  const damage = damageWarrior(warrior);
  dragon.healthPoints -= damage;
  warrior.damage = damage;
}

const mageTurn = (damageMage) => {
  const newDamage = damageMage(mage);
  dragon.healthPoints -= newDamage.damage;
  mage.damage = newDamage.damage;
  mage.mana -= newDamage.manaCost;
}

const dragonTurn = (damageDragon) => {
  const newDamage = damageDragon(dragon);
  mage.healthPoints -= newDamage;
  warrior.healthPoints -= newDamage;
  dragon.damage = newDamage;
}

const resultOfBattle = () => {
  warriorTurn(damageWarrior);
  mageTurn(damageMage);
  dragonTurn(damageDragon);
  return battleMembers;
}

const gameActions = {
  warriorTurn: warriorTurn,
  mageTurn: mageTurn,
  dragonTurn: dragonTurn,
  result: resultOfBattle
};

console.log(gameActions.result());
