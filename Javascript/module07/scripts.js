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
