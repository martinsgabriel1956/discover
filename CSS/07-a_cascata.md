# A Cascata

O Browser escolha qual regra aplicar, caso haja muita regra para o mesmo elemento.

A folha de estilo é lida de cima para baixo

Existem 3 fatores a serem considerados:

* Origem do estilo:

Em ordem decrescente de importância do CSS:

inline > tag style > tag link

* Especificidade:

* Importância

> OBS: Por padrão o user agent(browser) ao utilizar alguma tag semântica aplica automaticamente uma estilização para cada tag.

A cascata é nada mais do que, quando um elemento sobrescrever o outro, onde o elemento que está acima tem o valor sobrescrito pelo valor do mesmo elemento que está logo abaixo, fazendo assim uma cascata.

```CSS
  h1 {
    color: red;
  }
  
  h1 {
    color: green;
  }
```

A cor original declarada erá vermelho, porém, após declararmos o mesmo seletor com uma cor diferente, por ser o ultimo, a cor final será o verde. Pois, foi a ultima vez que sobrescreveu a cor.
