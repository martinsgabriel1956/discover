# For

Estrutura de repetição que consiste na seguinte anatomia:

```Js
  for(let i = 0; i < 10; i++) {
    // Bloco de código que irá se repetir
  }
```

Como vimos acima dentro do For, vai ter três informações importantes que são:

- A primeira é a declaração de uma variável (geralmente nomeamos de **i** e tenho valor de zero).
- A segundo será a quantidade de vezes que irá se repetir a linha ou bloco de códigos.
- A terceira é a expressão final que vai acontecer o loop, em outras palavras ele sempre irá incrementar a variável até a condição (vista na segunda expressão) bater.

> OBS: Podemos usar dois tipos de controle para realizar uma ação dentro, que são o **break** e o **continue**. Em que o break para a execução do loop e o continue pula um momento dentro do loop.

```js
for (let i = 100; i > 0; i--) {
  if (i === 50) {
    break;
  }
  console.log(i);
}
```

```js
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```
