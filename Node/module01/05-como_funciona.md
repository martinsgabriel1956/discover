# Como funciona?

O Node utiliza uma estratégia bem diferente do convencional (como a do apache), sendo mais rápido e performático.

O node é single threaded, isso significa que ele utiliza apenas um thread do sistema para realizar diversos pedidos para o servidor dentro da aplicação. Complementando esse fato, ele utiliza a estratégia de Non-Blocking-Io, que significa, ele não precisar a cada pedido (requisição) precisar bloquear o processo da thread, dito isso, agindo de forma assíncrona (diversas ações ao mesmo tempo), sem precisar ficar esperando uma resposta do servidor para poder continuar executando.
