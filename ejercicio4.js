/* 
Ejercicio 4

Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.
*/

const cartoons = [
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

let oldestCartoon = cartoons[0].name;
let oldestYear = cartoons[0].debut;

for (const cartoon of cartoons) {
    if (cartoon.debut < oldestYear) {
        oldestYear = cartoon.debut;
        oldestCartoon = cartoon.name;
    }
}
console.log(oldestCartoon)