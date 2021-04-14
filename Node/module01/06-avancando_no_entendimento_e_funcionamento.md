# Avançando no entendimento e funcionamento

O fluxo mais completo do funcionamento de uma aplicação em Node é:

- Aplicação é feita em Javascript, tendo a bagagem da engine V8
- o V8 se comunicando com o Node, se junta com um biblioteca assíncrona, chamada LIBVUV.
- Essa biblioteca trabalha com o sistema operacional.

Dentro do Libuv, temos a idéia de Event Loop, que consiste em rodar o tempo todo pegando os eventos que são adicionado em uma fila de eventos.

Quando um evento bloqueia o fluxo da aplicação, o Event Loop pega esse tal evento e joga para uma outra thread, chamada Worker Thread. Quando esse determinado evento fica pronto, ele volta para a fila, o que chamamos de callback.

> OBS: O Event Loop, roda as funções sempre de baixo pra cima.
