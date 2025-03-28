/* Ejercicio 12

Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.
 */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "Hero", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let foundMutants = [];

  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length > 0) {
    return `Mutantes con el poder ${power}: ${foundMutants}`;
  } else {
    return `No mutante encontrado con el poder ${power}`;
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "teleportation"));
console.log(findMutantByPower(mutants, "flight"));
