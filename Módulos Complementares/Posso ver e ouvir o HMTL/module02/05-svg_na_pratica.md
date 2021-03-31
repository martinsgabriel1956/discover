# SVG na pratica

Dentro da tag svg podemos usar a tag circle para definirmos que a imagem seja um circulo:

```html
  <svg>
    <circle cx="150" cy="150" r="80" stroke="green" stroke-width="4" fill="yellow">
  </svg>
```

cx => é o tamanho do circulo no eixo x
cy => é o tamanho do circulo no eixo y
r => é a circunferência do circulo
stroke => é a borda
stroke-width => é a largura da borda
fill => é a cor do elemento

```html
  <svg>
   <rect stroke="green" stroke-width="4" width="100%" height="100%" fill="yellow" />
  </svg>
```

rect => é o elemento em formato de retângulo

As vantagens de utilizar o SVG usando diretamente no HTML são:

- Diminuir as chamadas HTTP, pois, é um arquivo que já esta dentro do HTML
- Poder utilizar atributos globais, inclusive o style podendo estilizar

Desvantagens:

- O código dentro do HTML fica visualmente poluído
- O arquivo HTML fica maior
- Não ter a possibilidade de utilizar cache

Podemos usar também como um arquivo externo sendo adicionado na página como um arquivo de imagem, audio, vídeo e etc.

```html
  <svg 
  version="1.1"
  baseProfile="full"
  width="100" 
  height="100"
  xmlns="http://www.w3.org/2000/svg"
  >
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

Porém, ao contrário de quando utilizamos diretamente no HTMl, quando criamos um SVG em um arquivo externo, precisamos configurar 3 atributos para poder ficar visível em uma página, que são:

- version => A versão do SVG
- baseProfile => A base do SVG pegará tudo da página
- xmlns => Protocolo do SVG

As vantagens são:

- Conseguimos trabalhar com o cache, por causa da tag img

A desvantagem

- Não conseguir manipular o svg, pois, já está pré programado.
