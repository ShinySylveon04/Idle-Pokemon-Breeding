const _ = require("lodash");

const first = {
  species: "Eevee",
  shiny: true,
  gender: "Female",
  IVs: {
    HP: 1,
    Atk: 2,
    Def: 3
  }
}

const second = {
  species: "Eevee",
  shiny: false,
  gender: "Male",
  IVs: {
    HP: 4,
    Atk: 5,
    Def: 6
  }
}

const third = {
  species: "Ditto",
  shiny: false,
  gender: "Genderless",
  IVs: {
    HP: 1,
    Atk: 2,
    Def: 3
  }
}

const fourth = {
  species: "Beldum",
  shiny: false,
  gender: "Genderless",
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
  if (parent1.gender === "Female") {
    return parent1.species;
  }  
  else if (parent1.species === "Ditto" || parent2.species === "Ditto") {
    if (parent1.species === "Ditto") {
      return parent2.species
    }
    else {
      return parent1.species
    }
  }
  else {
    return parent2.species;
  }  
}

const makeEggGender = (parent1, parent2) => {
  if (parent1.gender === "Genderless" && parent2.gender === "Genderless") {
    return "Genderless"
  }
  else {
    return _.sample(["Male", "Female"]);
  }
}

const setShiny = (parent1, parent2) => {
  if (parent1.shiny === true || parent2.shiny === true) {
      return _.random(0, 10) >= 5;
  }
  else if (parent1.shiny === true && parent2.shiny === true) {
    return _.random(0, 10) >= 2;
  }
  else {
    return _.random(0, 10) === 5;
  }   
}         

const generateEgg = (parent1, parent2) => ({
  species: makeEggSpecies(parent1, parent2),
  shiny: setShiny(parent1, parent2),
  gender: makeEggGender(parent1, parent2),
  IVs: makeEggIVs(parent1, parent2)
});

console.log(JSON.stringify(generateEgg(first, second), null, 2));
console.log(JSON.stringify(generateEgg(third, fourth), null, 2));

module.exports = {generateEgg};