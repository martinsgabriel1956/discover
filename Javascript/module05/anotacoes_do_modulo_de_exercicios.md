# Anotações do Módulo 5 dos exercícios

Declaração conjunta é quando declaramos mais de uma variável na mesma linha

```Javascript
  let nome , age ;

  nome = 'Gabriel';
  age = 30;
```

Quando queremos passar múltiplos argumentos, geralmente usamos **,** para separar esses argumentos, como no exemplo abaixo:

```Javascript
  let nome, age, sexuality  ;

  name = 'Gabriel';
  age = 30;
  sexuality: 'Male';

  console.log(name, age, sexuality);
```

Quando queremos saber todo os valores dentro de um Array basta fazermos isso:

```Javascript
const animals = [
  'Lion', 'Monkey', 'Cat'
]

console.log(animals);
```

Quando queremos um valor especifico, basta usarmos [numero]. Porém, a contagem é de 0(primeiro) até o ultimo elemento no array.

```Javascript
const animals = [
  'Lion', 'Monkey', 'Cat'
]

console.log(animals[1]);
```

> OBS: O motivo de passarmos o numero entre o [], é pelo mesmo fato de não conseguirmos declarar o nome da variável começando com número.

Quando queremos saber o total de elementos do Array, usamos o length no formato de propriedade como se fosse um objeto.

```Javascript
const animals = [
  'Lion', 'Monkey', 'Cat'
]

console.log(animals.length);
```

Podemos colocar um objeto dentro do Array, dessa maneira:

```Javascript
const animals = [
  'Lion', 
  'Monkey', 
  {
   name: 'Cat',
   age: 4,
  }
]
```

Para acessarmos alguma propriedade de um objeto que está dentro do array, que esse objeto é um elemento do array. Basta fazermos isso:

```Javascript
const animals = [
  'Lion', 
  'Monkey', 
  {
   name: 'Cat',
   age: 4,
  }
]

console.log(animals[2].name);
```