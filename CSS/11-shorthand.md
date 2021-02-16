# Shorthand

é uma junção de propriedades, resumindo essas propriedades em uma única propriedade, deixando o código mais legível.

```CSS
  /* Background Properties */
  background-color: #000 ;
  background-image: url(images/bg.gif) ;
  background-repeat: no-repeat ;
  background-position: left top;

  /* Background Shorthand */
  background: #000 url(images/bg.gif) no-repeat left top;
  
  /* Background Properties */
  font-style: italic ;
  font-weight: bold ;
  font-size: .8em ;
  font-family: Arial, sans-serif ;
  line-height: 1.2;

  /* Background Shorthand */
  font: italic bold .8em/1.2 Arial, sans-serif;

```

> OBS: Ele não irá considerar propriedades anteriores, vai apenas aceitar a propriedade definida por ultimo.

> OBS: Se os valores não forem especificados de alguma propriedade, ele irá adotar para aquela o valor padrão.

> OBS: A ordem de declarar os valores, não tem relevância, pois, ele idêntifica que o valor especifico é para cada propriedade. Porém, se tiver diversos valor parecidos, ele irá se confundir
