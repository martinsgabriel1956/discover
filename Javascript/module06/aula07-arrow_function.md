# Arrow Function

é uma maneira mais moderna de declarar funções, deixando mais compacto, porém, ela é usada para o tipo expression:

```Javascript
  const sayMyName = () => {
  console.log('Gabriel');
}

sayMyName();
```

Pelo fato de ser uma função podemos passar parâmetros para ela:

```Javascript
  const sayMyName = (name) => {
  console.log(name);
}

sayMyName('Gabriel');
```