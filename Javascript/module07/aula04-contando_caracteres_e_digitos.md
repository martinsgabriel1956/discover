# Contando caracteres e dígitos

Para contarmos quantos caracteres, usamos a propriedade length:

```Javascript
let word = "paralelepípedo"
```

console.log(word.length);

Porém, se formos tentar utilizar em um número, vimos que dá indefinido, pois, não existe caractere:

```Javascript
let number = 5000;
```

Porém, podemos converter esse número em string para podermos contar:

```Javascript
console.log(number.length);
```

console.log(String(number).length);
