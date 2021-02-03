# Manipulando Arrays

elemento push() === Olha o último elemento e adiciona um novo elemento no final do array.

```Javascript
  let techs = ["HTML", "CSS", "JS"];
  console.log(techs.push("Typescript"));
```

elemento unshift() === Para adicionar um novo elemento no incio do array

```Javascript
  let techs = ["HTML", "CSS", "JS"];
  console.log(techs.unshift("SQL"));
```

elemento pop() === Para remover o ultimo elemento no final do array

```Javascript
  let techs = ["HTML", "CSS", "JS"];
  console.log(techs.pop());
```

elemento shift() === Para remover o primeiro elemento do array


```Javascript
  let techs = ["HTML", "CSS", "JS"];
  console.log(techs.shift());
```

elemento slice() === Separa todos os elementos do array e indica qual elemento que irá começar o array e até quanto ele vai durar.

```Javascript
  let techs = ["HTML", "CSS", "JS"];
  console.log(techs.slice(1, 3));
```

elemento splice() === Tem dois argumentos onde o primeiro pede qual elemento será tirado e o segundo é quantos elementos com ele serão tirados.

```Javascript
  let techs = ["HTML", "CSS", "JS"];
  console.log(techs.splice(1, 2));
```

elemento indexOf() === Para encontrar a posição de algum elemento no array

```Javascript
  let index = techs.indexOf('css');

  console.log(index);
```