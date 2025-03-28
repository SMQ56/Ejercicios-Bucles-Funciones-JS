/* Ejercicio 1

Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola. */

const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];
let humanCharacters = [];

/* humanCharacters = characters.filter(
  (characters) => characters.species === "Human"
); */

for (const character of characters) {
  if (character.species === "Human") {
    humanCharacters.push(character);
  }
}

console.log(humanCharacters);
