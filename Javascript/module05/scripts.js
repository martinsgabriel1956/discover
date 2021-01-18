/* Execícios: Aula 06 - Módulo 05 */

// 1 - Declare uma variável de nome Weight

let weight;

// 2 - Que tipo de dado a variável acima?

console.log(typeof weight);

/* 3 - Declare uma variável e atribua valores para cada um dos dados:
  * name: String
  * age: number(Integer)
  * stars: Number(Float)
  * isSubscribed: Boolean
*/

let name = 'Gabriel';
let age = 21;
let stars = 7.9;
let  isSubscribed = true;

/* 4.1 - Atribua a ela as mesma propriedades e valores do exercício 3 */

let student = {
  name: 'Gabriel',
  age: 21,
  weight: 95,
  isSubscribed: true,
};

/* 4 - A variável student abaixo é de que tipo de dados */
console.log(typeof student);

/* 4.2 - Mostre no console a seguinte mensagem:
  
  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto. 

*/

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/* 5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, um array vazio */

let students = [];

/* 6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da Questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)  */

// students.student = student;

/* OU */

students = [
  student
]

console.log(students);

/* 7 - Coloque no console o valor da posição zero do array acima */

console.log(students[0]);

/* 8 - Crie um no student e coloque na posição 1 do Array students */

const mary = {
  name: 'Mary',
  age: 22,
  weight: 84, 
  isSubscribed: false,
}

// students = [
//   student,
//   mary
// ]

students[1] = mary; // Outra maneira pra adicionar outro objeto

console.log(students[1]);

/* 9 - Se rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta rode o código e veja se acertou

*/

console.log(a);
var a = 1;
