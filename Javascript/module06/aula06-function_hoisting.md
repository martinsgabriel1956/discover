# Function Hoisting

Se declararmos uma função de maneira tradicional, o hoisting irá funcionar da mesma maneira que a variável:

```Javascript
sayMyName()

function sayMyName() {
  console.log('Gabriel'); 
}
```

Independente da chamada função ser antes da função em si ser declarada, o Javascript através do hoisting meio que passa a função pra cima, antes de chamar a função (como faríamos da maneira tradicional), porém, ele faz isso por baixo dos panos.

Se formos declara uma const com o valor uma função, o cenário muda, pois, ele irá retorna que não pode acessar a função antes dela ser declarada, em outras palavras, não pode usar o hoisting:


```Javascript
sayMyName()

const sayMyName = function() {
  console.log('Gabriel'); 
}
```

Se usarmos o var no lugar do const, temos algo mais surpreendente ainda. Como vimos no hoisting de variáveis, por baixo dos panos, a var vai para cima sendo seu valor undefined, pois, ela só é declarada. Dito isso, ela retorna como não sendo uma função, pois, a var é uma variável não uma função.

```Javascript
sayMyName()

var sayMyName = function() {
  console.log('Gabriel'); 
}
```

Resumindo, a única maneira de fazer hoisting(elevação) é declarando a função de maneira tradicional, e não em forma de expressão. 