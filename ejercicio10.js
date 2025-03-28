/* 
Ejercicio 10

Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
*/

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
    if (capitals[country]) {
        return `The capital of ${country} is ${capitals[country]}.`;
    } else {
        return `Sorry, the capital of ${country} is not in our database.`;
    }
    
}
console.log(getCapital("Italy"));

