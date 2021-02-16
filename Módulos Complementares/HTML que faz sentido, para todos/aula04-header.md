# Header

A tag header é estrutural e semântico, pois, ele irá participar de estruturas e semântico por que tem significado.

header != head

> OBS: Podemos definir um header em qualquer parte dá página, quando não está envolta de alguma outra tag, chamamos de header global.

Dois tipos de uso que faz perder a semântica da tag header, é:

Colocar dentro de outra tag header:

```HTML
  <header>
    <header>
    </header>
  </header>
```

Colocar no footer:

```HTML
  <footer>
    <header>
    </header>
  </footer>
```

> OBS: Header não possui atributos específicos, apenas atributos globais.

> OBS: Em questão posicionamento, a tag header ocupa uma linha inteira
