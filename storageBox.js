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

//const logObj = obj => console.log(JSON.stringify(obj, null, 2));

const storageBox = [first, second];
const daycare = [];
const daycare2 = [];

function movePokemon(fromArray, toArray, pokemonIndex) {
  const newToArray = _.cloneDeep(toArray);
  newToArray.push(fromArray[pokemonIndex]);
  const newFromArray = _.filter(fromArray, (item) => !_.isEqual(fromArray[pokemonIndex], item));
  return [newFromArray, newToArray];
}

const [temp, newDaycare] = movePokemon(storageBox, daycare, 0);
const [newStorageBox, newDaycare2] = movePokemon(temp, daycare2, 0);