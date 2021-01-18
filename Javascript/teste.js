/* Valores duplicados */
function criarValoresDuplicados(valor) {
  return valor * 2;
}

// console.log(criarValoresDuplicados(8));

/* Cria objetos */

function criaObjetos() {
  let objeto = {};
  return objeto;
}

var A = criaObjetos();
var B = criaObjetos();

/* adiciona a chave e o valor dela de um objeto */
A.nome = 'Gabriel';
A.idade = 21;
B.nome = 'Victória';
B.idade = 21;

// console.log(A, B);

/* Criar a propriedade e valor de uma maneira mais organizada */

function criarPessoas(nome, sobrenome) {
  let pessoa = {};
  
  pessoa.nome = nome;
  pessoa.sobrenome = sobrenome;

  return pessoa;
}

// let pessoaA = criarPessoas('Gabriel', 'Martins');
// let pessoaB = criarPessoas('Maria Clara', 'Alvarenga');
// let pessoaC = criarPessoas('Gabriel', 'Ribeiro');
// let pessoaD = criarPessoas('Fernando', 'Maciel');
// let pessoaE = criarPessoas('Alvaro', 'Borges');

// console.log(pessoaA, pessoaB, pessoaC, pessoaD, pessoaE);

function criarPessoas(nome, sobrenome) {
  let pessoa = {};
  
  pessoa.nome = nome;
  pessoa.sobrenome = sobrenome;

  function nomeCompleto() {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
  }

  pessoa.nomeCompleto = nomeCompleto;
  
  return pessoa;
}

let pessoaA = criarPessoas('Gabriel', 'Martins');

console.log(pessoaA.nomeCompleto());