# Criando o servidor

Por padrão, o navegador não irá reconhecer o ejs, apenas como se fosse um documento de texto. Para resolver isso, precisamos instalar algumas coisas:

- EJS:

```bash
  npm install ejs
      # ou
  yarn add ejs
```

- Express => Para criarmos um servidor

```bash
    npm install express
      #ou
    yarn add express
```

O express tem o intuíto de criar um servidor para mostrar os arquivos construídos no navegador.

Criamos um arquivo server.js para adicionarmos o express:

```js
const express = require('express');
```

Após isso estânciamos o express em uma variável, geralmente chamamos de app, mas, fica a seu critério.

```JS
  const express = require('express');
  
  const app = express();
```

Para podermos usar o ejs no navegador, precisamos configurar o express para poder dizer ao navegador que a ferramenta que irá renderizar o **HTML** será o **EJS**, chamamos essa ferramente de **view engine**.

```js
  const express = require('express');
  
  const app = express();

  app.set('view engine', 'ejs');
```

Precisamos criar rotas para fazer uma requisição HTTP usando os métodos HTTP, para acessarmos qualquer rota precisamos criar rotas do tipo Get para poder acessar, dito isso, precisamos criar uma rota para a homepage e pedir para renderizar o arquivo index.ejs.

```js
  const express = require('express');
  
  const app = express();

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => res.render('index'));
```

> OBS: '/' significa a página raiz, o index.

Como foi reparado acima, o método render do res o valor é o index.ejs, mas, como configuramos acima que ejs é o a extensão padrão para visualização no navegador, basta usar apenas o nome do arquivo sem a extensão.

Para ligar o servidor precisamos falar para o servidor qual porta que será utilizada esse servidor, para isso usamos o método do express chamado listen:

```js
  const express = require('express');
  
  const app = express();

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => res.render('index'));

  app.listen(3451);
```

Dentro do navegador, como estamos executando dentro da nossa própria maquina usamos o localhost passando a porta que escolhemos. 

> OBS: No MAC, localhost não existe para abrirmos o servidor na porta que desejamos, basta passar o endereço ip da maquina:portaSelecionada

O localhost pode receber diversas portas, consequentemente executar diversos servidores ao mesmo tempo, porém, como a porta é única não pode executar dois servidores com a mesma porta.

Por padrão, o express entende que os arquivos ejs ficaram na pasta views.
