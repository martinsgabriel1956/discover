/* Aula 01 - Módulo 3 */

//Tanto por aspas simples, duplas ou template string, o resultado é o mesmo
console.log('Gabriel'); // Aspas Simples
console.log("Gabriel"); // Aspas Duplas
console.log(`Gabriel`); // Template String

//Podemos misturar as as declarações, porém, a que engloba as outras duas não pode ser repetida.
console.log('`Gab`"bri"`el`');

//Podemos usar Template String para realizar operações em outra linguagem ou declarar variáveis
console.log(`Gabriel, ${2 + 2}`);


/* Aula 02 - Módulo 3 */

console.log(33); //Números Posítivos
console.log(-33); //Números Negativos
console.log(12.4); //Números Reais
console.log(12.4 + 5); // Soma de números Float com Inteiros
console.log(12.5 / 'abs'); // O resultado é NaN, pois, não tem como exibir um resultado entre os dois
console.log(12.4 / Infinity); // O resultado irá igualar ao infinito

/* Aula 03 - Módulo 3*/

console.log(true === true);
console.log(false === false);
console.log(true);
console.log(false);
console.log(true === false);
console.log(false === true);

/* Aula 04 - Módulo 3*/

console.log(null); // Valor nulo
console.log(undefined); // Valor indefinido
console.log(null === undefined); // Verificar o valor de ambos
console.log(undefined === null); // Verificar o valor de ambos

/* Aula 05 - Módulo 3 */

console.log({ 
  // Objeto vazio
});

console.log({
  name: "Gabriel",// Propriedades
  idade: 21, // Propriedades
  andar: function() { // Método
    console.log('Pode sim');
  },
});

/* Aula 06 - Módulo 3 */

console.log([ // Array
  "Ovos",
  "Alface",
  36
]);