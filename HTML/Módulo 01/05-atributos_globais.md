# Atributos globais

class == usada para classificar diversos elementos no HTML, para estilizar esses elementos no CSS e manipular esses elementos com o Javascript

```HTML
  <div class="content">
    <h1>Hello</h1>
  </div>  
  
  <div class="content">
    <h1>World!</h1>
  </div>  
```

contenteditable == Torna o determinado elemento editável pelo usuário, porém, ao recarregar a página a modificação é apagada. 

```HTML
  <h1 contenteditable="true">Fala clovis!</h1>
```

data-* === podemos adicionar qualquer nome após o **data-**, porém, é mais utilizar no javascript e CSS

```HTML
  <a data-link>Hi</a>
```

hidden === Esconder a tag 

```HTML
  <img src="http://google.com" alt="google" hidden>
```

id === é bem parecida com o atributo class, porém, a diferença é que podemos apenas ter um id referente a um determinado elemento.

```HTML
  <span id="span-button">Click em mim</span>
```

style === Para adicionar estilização a um determinado elemento ou elementos na página

```HTML
  <main style="background: red">
    <div>
     <h1></h1> 
     <p></p>
    </div>
  </main>
```

tabindex === serve para navegarmos pelos elementos através do TAB de forma organizada

```HTML
  <div tabindex="1">
    conteúdo 1
  </div>

  <div tabindex="2">
    conteúdo 2
  </div>

  <div tabindex="3">
    conteúdo 3
  </div>
```

title === definir um titulo

```HTML
  <div titulo="Definir um titulo">
    conteúdo 1
  </div>
```

