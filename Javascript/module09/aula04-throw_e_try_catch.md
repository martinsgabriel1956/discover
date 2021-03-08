# Throw e Try/catch

A idéia do uso conjunto deles é o seguinte, o try usaremos para tentar executar um bloco de código em que se houver erro, iremos usar o throw para disparar esse erro e iremos capturar esse erro na aplicação usando o catch.

> OBS: O mais comum quando utilizamos eles, é quando ao disparar um erro criamos um objeto do tipo error, passando a mensagem de erro e o código HTTP. Porém, podemos passar qualquer coisa.

```JS
  function sayMyName(name = "") {
  if(name === "") {
    throw new Error("Nome é obrigatório") // Ou throw "Nome é obrigatório"
  }
}
```

> OBS: Se o erro não estiver dentro de catch, o erro será uncaught, o que significa que se colocarmos no catch podemos fazer uma tratativa para esse erro, mas, se for forá irá dar um erro que irá parar a aplicação.

```JS
  // Sem Try Catch
  function sayMyName(name = "") {
  if(name === "") {
    throw new Error("Nome é obrigatório") // Ou throw "Nome é obrigatório"
  }

  console.log(name);
}

sayMyName(''); // ou sayMyName()

console.log('Após o try e catch');

```

```JS
  // Com Try Catch
  function sayMyName(name = "") {
  if(name === "") {
    throw new Error("Nome é obrigatório") // Ou throw "Nome é obrigatório"
  }

  console.log(name);
}

try {
  sayMyName('Gabriel'); // ou sayMyName()
} catch(e) {
  console.log(e);
}

console.log('Após o try e catch');

```
