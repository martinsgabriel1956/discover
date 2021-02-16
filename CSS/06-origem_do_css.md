# Adicionando CSS

Existe quatro maneiras de adicionar o CSS no HTML:

- Inline === Colocar diretamente na tag HTML:

```HTML
  <h1 style="color: blue;">Evolua <strong style="color:red">Rápido</strong></h1>
```

- Style === Usando a tag para estilizar dentro do HTML:

```HTML
 <style>
    h1 {
      color: blue;
    }

    strong{
      color:red;
    }
 </style>
```

- link === Exportando um arquivo CSS externo através da tag link rel=Stylesheet:

```HTML
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
```

```CSS
  h1 {
    color: blue;
  }

  strong {
    color: red;
  }
```

- @import === utilizado dentro do arquivo CSS ou na tag style do CSS, para referenciar outro arquivo CSS.

```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

  h1 {
    color: blue;
  }

  strong {
    color: red;
  }
```

> OBS: O mais indicado com relação as boas praticas, é separar os arquivos de estilização do CSS e fazendo referência no HTML.

> OBS: Usar o método import não é o mais comum de fazer referência, pois, acaba demorando um pouco pra colocar

> OBS: Uma prática menos utilizada é referênciar dentro da elemento com o atributo style.
