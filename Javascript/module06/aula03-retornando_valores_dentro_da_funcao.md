# Retornando valores dentro da função

Quando uma função não tem uma palavra chave chamada **return**,  a função irá retornar undefined

> OBS: Uma função após encontrar a palavra return, ela para de executar o resto do código e retorna o que vem em seguida

Podemos acessar uma variável que está dentro do escopo de uma função, basta ela ser declarada utilizando nenhum operador especial (var, let ou const) e ela chamada após a própria função se chamada, como veremos no exemplo abaixo:

```Javascript
  const sum = function(number1, number2) {
  total = number1 + number2; 

  return total;
}

let number1 = 34;
let number2 = 25;

sum(number1, number2);

console.log(`O soma é ${sum(number1, number2)}`); // Função chamada
console.log(total); //variável total sendo declarada após a função
```

> OBS: O escopo da função tem uma peculiaridade, os operadores especiais até mesmo o var que é global, só podem ser chamados dentro do escopo da função.

Não recomendado o uso do método acima, assim como usar o operador especial var.


