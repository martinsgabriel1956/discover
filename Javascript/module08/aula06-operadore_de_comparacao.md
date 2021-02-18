# Operadores de comparação

Compara dois valores e retorna um boolean (true ou false). São eles:

* igual(==)

```JS
  let one = 1;
  let two = 2;

  console.log(one == 1); //true
  console.log(one == 1.4); // false
  console.log(one == 2); // false
  console.log(one == two); // false
  console.log(one == one); // true
  console.log(one == "one") // false
```

* diferente(!=)

```JS
  let one = 1;
  let two = 2;

  console.log(one != two); //true
  console.log(one != 1); //false
  console.log(one != 2); //true
  console.log(one != one); //false
```

* estritamente igual(===)

```JS
  let one = 1;
  let two = 2;

  console.log(one === "1"); //false
  console.log(one === 1); //true
```

* estritamente diferente(!==)

```JS
  let one = 1;
  let two = 2;

  console.log(two !== "2"); //true
  console.log(two !== 2); //false
```

* maior(>)

```JS
  let one = 1;
  let two = 2;

  console.log(one > two); //false
```

* menor(<)

```JS
  let one = 1;
  let two = 2;

  console.log(one >= 1); //true
```

* menor igual(<=)

```JS
  let one = 1;
  let two = 2;

  console.log(one < two); //true
```

* maior igual(>=)

```JS
  let one = 1;
  let two = 2;

  console.log(two <= one); //false
```

> OBS: Existe diferença na utilização do = para ==. O primeiro é de atribuição a algum valor, geralmente usado para variáveis, e o segundo é o igual.

> OBS: Se tentarmos somar uma string com um número, ele irá concatenar um no outro.
