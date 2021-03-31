# Images

Usamos a tag img para adicionarmos imagens, em que contain dois atributos obrigatórios para o funcionamento da tag que são: src e o alt.

src => é o caminho da imagem, de onde a imagem irá vim. Essa caminho pode ser em algum lugar da web ou em uma pasta local.

alt => é o texto alternativo, geralmente quando a imagem não é carregada por algum motivo, o alt nos auxilia indicando o que é aquela imagem.

```html
   <img src="https://source.unsplash.com/random" alt="Imagem de título">
```

Podemos definir a altura e a largura de imagem, utilizando os atributos width e height:

```html
   <img src="https://source.unsplash.com/random" alt="Imagem de título" width="150px" height="">
```

> OBS: Se não soubermos definir a proporção da imagem ela poderá ficar destorcida, pois, os atributos irão setar da maneira que foi definida. Uma outra opção, é quando não sabemos a proporção da imagem escolhermos apenas um para a imagem não distorcer.

Podemos também usar a tag imagem dentro da tag a:

```html
  <a href="http://google.com">
    <img src="https://source.unsplash.com/random" alt="Imagem de título" />
  </a>
```
