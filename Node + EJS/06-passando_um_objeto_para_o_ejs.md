# Passando um objeto para o ejs

O ejs nos permite adicionar objetos javascript, com o intuíto de podemos renderizar algum conteúdo dinâmicamente em outras partes do código

No index:

```js
  <%- include('./partials/header', { pagina: 'alguma página' }) %>
```

No header:

```js
  <%- pagina %>
```

> OBS: Sempre que uma parte tiver um objeto declarado, em todas as páginas precisamos passar dentro do include o objeto com a tal propriedade e valor 
