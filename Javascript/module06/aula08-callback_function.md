# Callback Function

Como podemos passar qualquer tipo de dados dentro da chamada da função, podemos passar uma função, como iremos vê no exemplo abaixo:

```Javascript
function sayMyName(name) {
  console.log('antes de executar a função callback');
  name();
  console.log('depois de executar a função callback');
}

sayMyName(() => {
  console.log('Estou em uma callback!');
});
```

Em resumo, callback function são funções que passam como parâmetros para outra funções. Como vimos no exemplo acima, a arrow function é uma callback function, pois, ta passando como um parâmetro para a função sayMyName.

Nisso se tivermos parâmetros dentro da função, o que está dentro da array function será atribuído dentro do parâmetro name, em outras palavra, name irá se tornar uma função e irá receber o que estava dentro da callback, porém, isso vai acontece por baixo dos panos.