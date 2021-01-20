# Elementos do Array

Para contarmos quantos elementos temos dentro de um Array, usamos atributo length:

```Javascript
let array = new Array(
  'a', 
  {type: 'array'} ,
  'b', 
  function() {
    return 'hi';
  }
);

console.log(array.length);
```

> OBS: Se um desses elementos for uma **função**, para executarmos chamando o **elemento** e passando em seguida um **()**

```Javascript
let array = new Array(
  'a', 
  {type: 'array'} ,
  'b', 
  function() {
    return 'hi';
  }
);

console.log(array[3]());
```
