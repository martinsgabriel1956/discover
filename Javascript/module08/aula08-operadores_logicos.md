# Operadores lógicos

São dois valores booleanos que ao serem verificados, resultara em verdadeiro ou falso. Existe 3 tipos de operadores lógicos, são eles:

* AND(&&) ==> Ambas as condições precisam serem atendidas, se apenas uma delas for verdadeiro, o resultado vai ser false do mesmo jeito.

```Js
let pao = true;
let queijo= true; 

console.log(pao && queijo);
```

* OR(||) ==> Se alguma condição for atendida, o resultado é verdadeiro. Não precisa que ambas sejam pra ser verdadeiro.

```Js
  let pao = true;
  let queijo= true; 

  console.log(pao || queijo);
```

* NOT(!) => Inverte o resultado da condição. Por exemplo, se a condição for verdadeira, ele transforma em falsa e vice versa.

```Js
  let pao = true;
  let queijo= true; 
  
  console.log(!pao);
  console.log(!queijo);
```
