// Numero par ou não

function myFunction(number) {
  return number % 2 == 0
}

// Numero Não decimal

function myFunction(input) {
  return input % 1 == 0;
}

// Numer

function myFunction(a, b) {
  return a < b ? a / b : a * b
}

// Verificar se o que tem em uma string tem em outra string e concatena-las conforme as condições

function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b
}

// Outra maneira
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
}

// Calcular a porcentagem de um número


function myFunction(number, percentage) {
  const total = { number, percentage };
   
  const calculate =  total.number * (total.percentage / 100);
  
  return calculate;
}

console.log(myFunction());

// Separar todos os números e coloca-los em um array

function myFunction(number) {
  return [...number + ''].map(Number);
}

// Ou
function splitToDigit(n){
  return [...n + ''].map(Number)
}

// Ou 

function myFunction( num ) {
  const string = num + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}