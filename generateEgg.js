const _ = require("lodash");

const first = {
  species: "Eevee",
  shiny: false,
  gender: "Female",
  IVs: {
    HP: 1,
    Atk: 2,
    Def: 3
  }
}

const second = {
  species: "Ditto",
  shiny: false,
  gender: "Genderless",
  IVs: {
    HP: 4,
    Atk: 5,
    Def: 6
  }
}

const third = {
  species: "Charmander",
  shiny: false,
  gender: "Female",
  IVs: {
    HP: 1,
    Atk: 2,
    Def: 3
  }
}

const fourth = {
  species: "Torchic",
  shiny: false,
  gender: "Female",
  IVs: {
    HP: 4,
    Atk: 5,
    Def: 6
  }
}

const parentInheritance = (parent1, parent2, chooseIV, stat) => {

  if (chooseIV === 0) {
    return parent1.IVs[stat];
  }
  else if (chooseIV === 1) {
    return parent2.IVs[stat];
  }
  else {
    return _.random(0, 10);
  }
}

const makeEggIVs = (parent1, parent2) => {

  const chooseIV = _.random(0, 2);

  const setHP = parentInheritance(parent1, parent2, _.random(0, 2), 'HP')

  const setAtk = parentInheritance(parent1, parent2, _.random(0, 2), 'Atk')

  const setDef = parentInheritance(parent1, parent2, _.random(0, 2), 'Def')

  return {HP:setHP, Atk:setAtk, Def:setDef}
}

const makeEggSpecies = (parent1, parent2) => {
  if (parent1.gender === "Female" || parent2.gender === "Genderless" || parent2.species === "Ditto") {
    return parent1.species;
  }  
  else {
    return parent2.species;
  }  
}

const makeEggGender = () => _.sample(["Male", "Female"]);

const setShiny = () => _.random(0, 10) === 5;

const generateEgg = (parent1, parent2) => ({
  species: makeEggSpecies(parent1, parent2),
  shiny: setShiny(),
  gender: makeEggGender(),
  IVs: makeEggIVs(parent1, parent2)
});

console.log(JSON.stringify(generateEgg(first, second), null, 2));
console.log(JSON.stringify(generateEgg(third, fourth), null, 2));

module.exports = {generateEgg};