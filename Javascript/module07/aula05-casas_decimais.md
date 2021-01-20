# Casas Decimais

> OBS: Quando uma função é atrelada a um objeto, chamamos de método.

Quando queremos limitar a quantidade de números após o ponto, usamos o **toFixed()**:

```Javascript
let number = 5464.54456411231854

console.log(number.toFixed(2));
```

Porém, se quisermos trocar o **ponto** pela **virgula**, podemos usar o **replace("", "")**:

```Javascript
let number = 5464.54456411231854

console.log(number.toFixed(2).replace(".", ","));
```

Onde no exemplo acima, o **primeiro parâmetro** é o que queremos substituir o que no caso é o **ponto**, e o **segundo parâmetro** é o que iremos substituir, que no caso é a **virgula**.

> OBS: Porém, ao fazermos o **método** acima, esse número irá transformar em uma **string**, para isso poderíamos usar a **função Number()**:

```Javascript
let number = 5464.54456411231854

console.log(Number(number.toFixed(2).replace(".", ",")));
```

Porém, ao fazermos isso o resultado será **NaN (Not a Number)**, pois, para ser um **número decimal**, **precisa** que tenha ponto e não **virgula**. Por isso, lá em cima usando o **replace()**, o tipo virou **string** e não **número**.

> OBS: Podemos atrelar diversos **métodos**, apenas passando o **ponto**:

```Javascript
let number = 5464.54456411231854

console.log(number.toFixed(2).replace(".", ",").repeat());
```
