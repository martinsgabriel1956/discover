# Separando as partes do layout

Separar as partes é muito importante para deixar a página mais dinâmica, fazendo com que apenas modifique o necessário daquela página e as alterações sejam feitas de maneira dinâmica nas outras que tiverem o mesmo bloco de código.

Para chamarmos outros arquivos separados ejs, basta usarmos o include do ejs:

```js
  <%- include('head')  %>
```

A sintaxe do ejs é formada por <% %>, porém, para cada ação que queremos realizar, vemos que a tag inicial do ejs tem uma pequena mudança. Exemplo acima, vimos que ela <%-, a tag com esse traço significa que irá incluir um outro arquivo ejs.

> OBS: Em arquivos ejs, não precisamos ficar reiniciando o servidor, pois, ele atualiza automaticamente, porém, em arquivos js precisamos ficar reiniciando.
 
