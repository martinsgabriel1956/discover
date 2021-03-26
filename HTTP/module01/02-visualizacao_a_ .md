# Visualização a comunicação

O browser faz o pedido a um servidor, e ele retorna ao browser com a resposta. Essa comunicação é feita através de mensagem, que são de três tipos:

* Pedido(Request)
* Resposta (Response)
* Em comúm entre ambas(Request/Response)

Quando fazermos um Request precisamos saber qual a ação que queremos que iremos fazer no servidor,chamados de Métodos(method).

> OBS: Todos as requisições são mandadas para um recurso que irá enviar para o servidor.

O servidor irá primeiramente enviar um Status code sobre o pedido feito do browser. Dependendo do Status code ele irá retornar o que foi pedido, tirado os status code do tipo 400 e 500.

O header e o body não são obrigatórios de enviar ou o servidor enviar. Porém, sempre irá vim eles no log da requisição e da resposta.

Os headers são compos informátivos em que é constituído pela propriedade e valor. Alguns exemplos de headers:

* Content-Type: application/json => Aqui ele pede o tipo do conteúdo que é JSON
* User-Agent: Chrome => Aqui é o navegador que foi utilizado para fazer a requisição ou enviar a resposta
* Request URL: www.google.com => A URL em que foi feia a Requisição.

O Body será a conteúdo que será usado para fazer um envio ou pedido de algum dado ou bloco de dados. Alguns exemplos de body:

* HTML
* Content
* JSON
