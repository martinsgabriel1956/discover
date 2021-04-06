# Foreach

usamos o foreach quando pegamos dados do backend para imprimir no front-end trazendo essas informações de maneira dinâmica para ser tratada no lado do cliente.

```js
  const users = [
    {
      name: Gabriel,
      age: 22
    },
    {
      name: Maria,
      age: 23
    },
  ]

  server.get('/', (req, res) => {
    return res.render('index', { users })
  })
```

```js
  <% users.forEach(user => { %>
  <ul>
    <li><%= user.name %></li>
    <li><%= user.age %></li>
  </ul>
  <% }) %>
```

Quando quiser imprimir algo em tela, pelo ejs basta usar a tag com inicio <%= %>, como no exemplo acima:
