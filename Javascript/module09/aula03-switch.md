# Switch

Declaração parecida com a do if e else, porém, tem sua peculiaridade.

```js
  switch(expressão) {
    case 'a':
      //bloco ou linha de código
      break;
    case 'b':
      //bloco ou linha de código
      break;
    default:

      break;
  }
```

Fazendo uma analogia, o case é como se fosse um if e else if, e o default é como se fosse o else.

> OBS: O break é opcional, porém, é muito importante pelo fato de se executarmos uma aplicação e não tiver algum break, entrará em um loop infinito. Fazendo com que trave a aplicação. Pelos menos, tem que ter um break para não acontecer esses casos.
