/* Aula 01 - Módulo 4 */

var clima = 'Quente'; 
let clima = 'Nublado';
const clima = 'Chuvoso'; // Não pode alterar o valor da const
clima = 'Frio'; // Declarar um novo valor a variável, sem precisar colocar um dos prefixos acima
console.log(clima);

/* Aula 02 - Módulo 4 */

let clima = '';
clima = 0;
clima = false;

console.log(typeof clima); // typeof para dizer qual o tipo de dado

/* Aula 03 - Módulo 4 */

// Escopo
{
  let x = 0;
  console.log(x)
}

// Escopo global
console.log('> existe x antes do bloco?', x);

{
  // Escopo local
  var x = 0;
}
// Escopo global
console.log('> existe x depois do bloco?', x);

/* Aula 04 - Módulo 4 */

// Não funciona, pois, não está na local e está antes da variável ser declarada 
// console.log('> existe y antes do bloco?', y);

// let y = 1;
const y = 1;

{
  // y = 0;
  const y = 0;
  console.log('> existe y?', y); // Ele funciona apenas quando a variável foi declarada no escopo local
}

// Isso não funciona também após o y ser declarado na local, pois, essa linha não está dentro do local
console.log('> existe y depois do bloco?', y);

/* Aula 05 - Módulo 4 */

// Acentuações e case sensitive faz muita diferença no Javascript
var Victória = 'Victória';
var Victoria = 'Victória';
var victoria = 'Victória';
var victória = 'Victória';

console.log(Victória, Victoria, victoria, victória);

// Podemos usar caracteres especiais para declarar variáveis
let $varNum = 3;
let _varNum = 6;

console.log($varNum);
console.log(_varNum);

// Não podemos começar com números, pois, ele entende apenas como número e não como nome de variável
let 1245 = 1365;

// Não podemos começar com espaço entre as palavra, pois, ele entende como se fosse declarar mais de uma variável na mesma linha
let fala comigo = 'Fala comigo';

// Criar variáveis com nomes coerentes:

let name = 'Gabriel';
let email = 'fulano19@gmail.com';
let age = 12;

// Usar nomes que explicam o que faz ou o que é a variável

let calculateAverage = avarage / 4;
let ifThisHumanExists = man === 'human';
let createFullName = nome + sobrenome;

// Podemos declarar variáveis de duas maneiras:

// Usando o camelCase
let doYouLoveMe;

// Usando snake_case
let my_wallet;

// Devemos escrever em inglês 
let myEnglish_isGood = true;

