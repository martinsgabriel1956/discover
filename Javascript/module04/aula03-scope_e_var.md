# Scope

Scope(escopo) determina a visibilidade de alguma variável no Javascript

## Block Statement (Declaração de bloco)

```Javascript
  // Vamos iniciar o bloco
  {
    // Aqui dentro é um bloco e posso colocar qualquer código
  } // Aqui fechamos o código
```

**Block Scoped** é o bloco que também cria um novo escopo.

## Var

é global e pode funcionar fora de um escopo de bloco, porém, também é local

Global => Tudo o que está executando dentro da aplicação
Local => É o que existe apenas dentro do escopo

hoisting(elevação) => ele pega a variável no escopo local e declara ela em cima do código e depois no escopo local ela só atualiza a variável declarada.

```Javascript
// Escopo global
var x; // Hoisting
console.log('> existe x antes do bloco?', x);

{
  // Escopo local
  x = 0;
}
// Escopo global
console.log('> existe x depois do bloco?', x);
```

Porém, o hoisting acontece por debaixo dos panos.