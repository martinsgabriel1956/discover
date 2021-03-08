/* Aula 01 - Modulo 9 
  console.log('a');
  console.log('b');
*/

/* Aula 02 - Modulo 9 
  let temperature = 36.5;
  let highTemperature = temperature >= 37.5;
  let mediumTemperature = temperature < 37.5 && temperature >= 37;

if(highTemperature) {
  console.log('Você está com febre!');
} else if(mediumTemperature) {
  console.log('Você está febril!')
} else {
  console.log('Você está bem!');
}

*/

/* Aula 03 - Modulo 9 
  let expression = 'default';

switch(expression) {
  case 'a':
   console.log('a');
    break;
  case 'b':
   console.log('b');
   break;
  default:
     console.log('default');
  break;
}

function calculate(number1, operator, number2 ) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      console.log("Não tem resultado");
      break;
  }

  return result;
}

console.log(calculate(4, '+', 8)); 
console.log(calculate(4, '-', 8)); 
console.log(calculate(4, '*', 8)); 
console.log(calculate(4, '/', 8)); 
*/

/* Aula 04 - Modulo 9 
  function sayMyName(name = "") {
  if(name === "") {
    throw new Error("Nome é obrigatório") // Ou throw "Nome é obrigatório"
  }

  console.log(name);
}
// sayMyName(''); // ou sayMyName()

try {
  sayMyName('Gabriel'); // ou sayMyName()
} catch(e) {
  console.log(e);
}

console.log('Após o try e catch');
*/
