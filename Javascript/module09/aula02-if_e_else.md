# If e else

é um controle que nos auxilia a determinarmos diversos caminho, consequentemente mudando o fluxo da aplicação.

if === se
else === se não

A estrutura funciona da seguinte maneira:

```JS
  if(condicional) {
    // linha ou bloco de código a ser executado se a condição for atendida
  } else {
    // linha ou bloco de código a ser executado se a condição não for atendida
  }
```

> OBS: Podemos usar apenas o if, se queremos que apenas a condição seja atendida sem a possibilidade de que tenha uma outra alternativa, chamamos isso de condicional simples.

```JS
  if(condicional) {
    // linha ou bloco de código a ser executado se a condição for atendida
  }
```

Podemos ter múltiplas condições e para isso utilizamos o **else if**.

```JS
  if(condicional) {
    // linha ou bloco de código a ser executado se a condição for atendida
  } else if(outra condicional) {

  } else {
    // linha ou bloco de código a ser executado se a condição não for atendida
  }
```

> OBS: Se dentro de um if, else ou else if tiver apenas uma linha de código, podemos utilizar sem as chaves, porém, não é tão recomendado pelo fato de por qualquer falta de atenção podemos causar um erro na aplicação, digitando algo sem querer ou colocando mais uma linha de código esquecendo de recolocar a chaves.

> OBS: Uma outra dica, é transformar as condicionais em variáveis e depois sṍ fazer a chamada da variável, onde ficaria a condicional:

```JS
  var condition = condicional
  var otherCondition = differentConditional; 

  if(condition) {
    // linha ou bloco de código a ser executado se a condição for atendida
  } else if(otherCondition) {

  } else {
    // linha ou bloco de código a ser executado se a condição não for atendida
  }
```

> OBS: Os valores truthy e falsy, podem ser adicionados nas condicionais.

> OBS: Se bater uma condição com outra, ele vai manter a ordem padrão: primeiro if, else if (se tiver mais de uma condição) e depois o else.
