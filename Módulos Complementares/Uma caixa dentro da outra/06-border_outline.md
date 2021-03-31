# Border e outline

São as bordas de uma caixa, em que recebe o seguintes valores:

- Style
  - Solid
  - Dotted
  - Dashed
  - Double
  - Groove
  - Ridge
  - Inset
  - Outset

- Width
  - Length

- Color
  - color

Existe alguns tipos de shorthands que podemos usar, tipo:

- border: medium solid red; => shorthand para todas as direções
- border: dashed blue; => largura e cor para todas as direções
- border-(top/right/bottom/left): solid 2px => com uma direção definida
- border: 2px outset => largura e estilo para todas a direções.

A borda soma com a altura e largura do elemento, por exemplo: se um elemento tiver altura e largura de 100px e a borda tiver o tamanho de 2px, no total o elemento terá o tamanho de 104px.

> OBS: Box sizing: border-box é responsável para não houver a soma do tamanho com a da borda, em outras palavras, a largura e altura ser exatamente o valor que for definido.

Para o border ser aplicado é obrigado pelo menos informarmos quando é o estilo da borda.

Outline é bem parecido com a borda, porém, ele não modifica o tamanho da caixa, pois, não faz parte do box-model. Não temos como ajustar individualmente, pode mudar o tamanho sem ser retângulo e o user-agent usa muito essa propriedade para acessibilidade.

> OBS: Nas tags input, são utilizados por padrão por questões da acessibilidade
