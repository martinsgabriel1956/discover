# Scope let e const

Const e let são locais, então, só funcionam no escopo onde foram criada

```Javascript
// Não funciona, pois, não está na local e está antes da variável ser declarada 
console.log('> existe y antes do bloco?', y);

{
  let y = 0;
  console.log('> existe y?', y); // Ele funciona apenas quando a variável foi declarada no escopo local
}

// Isso não funciona também após o y ser declarado na local, pois, essa linha não está dentro do local
console.log('> existe y depois do bloco?', y);
```

Porem, se usarmos o conceito de hoisting, vemos algo surpreendente:

```Javascript
// console.log('> existe y antes do bloco?', y);

let y = 1;

{
  y = 0;
  console.log('> existe y?', y); // Ele funciona apenas quando a variável foi declarada no escopo local
}

// Isso não funciona também após o y ser declarado na local, pois, essa linha não está dentro do local
console.log('> existe y depois do bloco?', y);

```

No caso acima, o y foi declarado no variável global, porém, foi atualizado no variável local e quando retornou no console o valor foi o da variável atualizada no local, que é **0**.

Com a constante, acontece algo diferente. Não podemos alterar o valor da variável, porém, podemos criar uma const do mesmo nome em outro escopo, dando duas variáveis com o mesmo nome, porém, em escopos diferentes, como vemos no exemplo abaixo:

```Javascript
const y = 1;

{
  const y = 0;
  console.log('> existe y?', y);
}

console.log('> existe y depois do bloco?', y);
```

> OBS: Evitamos de usar o var no Javascript mais moderno, pois, a flexibilidade em diferentes escopos e a alteração em diferentes escopos, causando bugs inesperados.

