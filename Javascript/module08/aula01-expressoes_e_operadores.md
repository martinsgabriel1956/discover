# Expressões e operadores

Expressions === qualquer linha de código que resolve algo.

```JS
  let number;
```

> OBS:  No javascript, o uso de ponto e virgula no final de um expressão é algo facultativo, ou seja, não são obrigatória. Um dos poucos casos em que a não utilização do ponto e virgula causa algum tipo de problema é quando usamos uma função auto-executável. Veja no exemplo abaixo:

```JS
  let number = 1

  (function() {
    console.log();
  })
```

Nessa caso, ele entende que a função é um argumento passado que executará uma outra função. Por está em outra linha, ele não consegue identificar que o valor de 1 é apenas uma variável.

Operadores Unário === Vem na frente do único valor. Por exemplo, quando queremos incrementar ou decrementar mais um valor ao número.

Operadores Binário === Necessita de dois valores para está entre eles. Por exemplo, alguma operação matemática com dois valores.

Operador Terciário === O único caso existe com esse operador, onde utilizamos o ? e o :, para indicar uma condição. O ? === if e o : === else.