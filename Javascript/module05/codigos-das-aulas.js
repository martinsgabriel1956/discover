/* Aula 01 - Modulo 05 */

// Declaração / Declaration
var name;

//Assignment / Atribuição

 name = "Gabriel";

// Tipos de dado declarado

console.log(typeof name);

/* Aula 02 - Modulo 05 */

/* let age = 20;
let ifIsHuman = true; */

// Agrupamento de declarações
let age, ifIsHuman;

age = 20;
ifIsHuman = true;

// Multiplos argumentos na função
console.log(name, age, ifIsHuman);

/* Aula 03 - Modulo 05 */

// escrita de texto + variáveis

// Concatenando valores
console.log('O ' + name  + ' tem ' + age + ' anos.');

// Interpolando valores com Template string/literals

console.log(`O ${name} tem ${age} anos.`);

/* Aula 04 - Modulo 05 */

const person = {
  name: 'John',
  age: 30,
  weight: 88.6,
  isAdmin: true
}

console.log(`O ${person.name} tem ${person.age} anos.`);

/* Aula 05 - Modulo 05 */

const animals = [
  'Lion', 
  'Monkey', 
  {
    name: 'Dog',
    age: 4
  },
  // 'Cat'
]
// Todos os elementos do array
console.log(animals);

// Cada elemento do array
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

// Total de elementos dentro do array
console.log(animals[2].name, animals[2].age);