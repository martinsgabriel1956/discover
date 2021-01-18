/* Aula 01 - Modulo 6 */

// Criar aplicativos que irá criar umas frase motivacionais

// console.log('Estudar é muito bom');
// console.log('Paciência e persistência');
// console.log('Revisão é a mãe do aprendizado');

// Declaration - declaration
// Ou function declaration/statement
function createPhrases() {
  console.log('Estudar é muito bom');
  console.log('Paciência e persistência');
  console.log('Revisão é a mãe do aprendizado');
}

// Executar, rodar, chamar, invocar a função
// Execute, run, call, invoke the function

createPhrases();

/* Aula 02 - Modulo 6 */

// function expression / anonymous

// Parâmetros da função(parameters)
const sum = function(number1, number2) {
  console.log(number1 + number2); 
}

sum(2, 3); // Argumentos

/* Aula 03 - Modulo 6 */

const sum = function(number1, number2) {
  total = number1 + number2; 

  return total;
}

let number1 = 34;
let number2 = 25;

sum(number1, number2);

// console.log(`O número 1 é ${number1}`);
// console.log(`O número 2 é ${number2}`);
console.log(`O soma é ${sum(number1, number2)}`);
console.log(total);

/* Aula 04 - Modulo 6 */
function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2;
}

const copo = fazerSuco('maça', 'Banana');

console.log(copo);

/* Aula 05 - Modulo 6 */

let subject = 'create some videos';

function createThink(subject) {
  subject = 'study videos';
  return subject;
}

console.log(createThink(subject));
console.log(subject);

/* Aula 06 - Modulo 6 */

sayMyName()

function sayMyName() {
  console.log('Gabriel'); 
}

sayMyName()

const sayMyName = function() {
  console.log('Gabriel'); 
}

sayMyName()

var sayMyName = function() {
  console.log('Gabriel'); 
}

sayMyName()

const sayMyName = function sayMyName() {
  console.log('Gabriel'); 
}

/* Aula 07 - Modulo 6 */

const sayMyName = (name) => {
  console.log(name);
}

sayMyName('Gabriel');

/* Aula 08 - Modulo 6 */

function sayMyName(name) {
  console.log('antes de executar a função callback');
  name();
  console.log('depois de executar a função callback');
}

sayMyName(
  () => {
  console.log('Estou em uma callback');
});

/* Aula 09 - Modulo 6 */

function Person(name) {
  this.name = name;
  this.walk = () => {
    return this.name + " está andando";
  };
}

const gabriel = new Person('Gabriel');
const denilson = new Person('Denilson');
const olivia = new Person('Olivia');

console.log(gabriel.walk());
console.log(denilson.walk());
console.log(olivia.walk());

const nome = new String("Gabriel"); // Função construtora pra Strings
const numero = new Number(21); // Função construtora pra Numbers
const data = new Date("2020-12-24"); // Função construtora pra Dates

console.log(nome);
console.log(numero);
console.log(data);