/* Aula 01 - Modulo 7 */
  console.log("Gabriel".split());
  console.log(23.5.hasOwnProperty());

/* Aula 02 - Modulo 7 */
  console.log('9' + 5); // Type Coersion, onde o javascript converte o 5 (que é do tipo Number) em do tipo String para concatenar com o "9".
  console.log(Number('9') + 5); // Type Conversion, onde ao usar o Number forçamos a conversão do '9' em do tipo Number para somar com o 5.

/* Aula 03 - Modulo 7 */
  let string = "500";

  console.log(Number(string)); 

  let number = 500;

  console.log(String(number));

/* Aula 04 - Modulo 7 */

let word = "paralelepípedo"

console.log(word.length);

let number = 5000;

console.log(number.length);

console.log(String(number).length);

/* Aula 05 - Modulo 7 */
  let number = 5464.54456411231854

  console.log(number.toFixed(2));

  console.log(number.toFixed(2).replace(".", ","));

/* Aula 06 - Modulo 7 */

let word = "Programar é muito bacana";

  console.log(word.toUpperCase());
  console.log(word.toLowerCase());

/* Aula 07 - Modulo 7 */

let phrase = "Eu quero viver!";

console.log(phrase.includes("Amor"));

let phrase_1 = "Eu quero um amor!";

console.log(phrase_1.includes("Amor"));

let phrase_2 = "Eu gosto do filme, Um Grande Amor!";

console.log(phrase_2.includes("Amor"));

/* Aula 08 - Modulo 7 */
let phrase = "Eu quero viver um amor";

let wordArray = phrase.split(" "); // Separando por espaços
// let wordArray = phrase.split("o"); // Separando por o

let phraseWithUnderscore = wordArray.join("_"); // join() é usado para juntar todos os elementos do array

console.log(wordArray, phraseWithUnderscore);

/* Aula 09 - Modulo 7 */
let myArray = new Array(4,5,7,9);
console.log(myArray);

/* Aula 10 - Modulo 7 */
let array = new Array(
  'a', 
  {type: 'array'} ,
  'b', 
  function() {
    return 'hi';
  }
  );
  
  console.log(array.length);
  
/* Aula 11 - Modulo 7 */
  let word = "manipulação";
  console.log(Array.from(word));
  
/* Aula 12 - Modulo 7 */
let techs = ["HTML", "CSS", "JS"];

//Adicionar elemento no final do arrays
  console.log(techs.push("Typescript"));

// Adicionar elemento no inicio
   console.log(techs.unshift("SQL"));

// Remover elemento no final
  console.log(techs.pop());

// Remover elemento no começo
  console.log(techs.shift());

// Pegar somente algum elemento
  console.log(techs.slice(1, 3));

// Remover um ou mais elemento em qualquer lugar do array
  console.log(techs.splice(1, 2));

// Encontrar a posição de um elemento no array
  let index = techs.indexOf('css');

  console.log(index);