# Argumentos e parâmetros 

Podemos declarar funções da maneira tradicional:

```Javascript
  function newFunction() {
    //
  }
```

Outra maneira é declarar por meio de uma variável:

```Javascript
  const sum =  function() {

  }
```

Chamamos essa segunda função anonima ou function expression.

Dentro dos () temos os parâmetros, não precisamos declara os parâmetros com let, const ou var, pois, ao usarmos os parâmetros ja serão atreladas os parâmetros.

```Javascript
  const sum = function(number1, number2) {

  }

  sum(2, 4); // Arguments
```

