# Distância Absoluta e relativas

## Distância Absoluta

Distância Absoluta === <length>

São fixas e não alteram seu valor.

* cm(Centímetro) => 1cm = 96px/2.54
* in(Inches(Polegadas)) => 1in = 2.54cm = 96px
* px(Pixels) => 1px = 1/96th of 1in

> OBS: Não é recomendado utilizar a unidade centímetro, pois, existe um nível de complexidade, trabalhando em um calculo bem esquisito de centímetro de tela. O mais utilizado é a unidade pixel.

## Distâncias Relativas

Pelo próprio nome ja diz, elas são relativas a outro valor, que podem ser ao elemento pai, root, ou tamanho da tela

A grande vantagem da utilização, é a maior adaptação aos diferentes tipos de tela.

* em => Relativo ao tamanho da font do pai.

```CSS
  /* O seletor p por ser um elemento filho, ele irá fazer o calculo da propriedade em questão do elemento pai(div) * a do elemento filho */

div {
  font-size: 16px;
}

p {
  font-size: 1.6em; 
}
```

> OBS: Se não existir própriamente dito um elemento pai, ele irá pegar e fazer o calculo do elemento que no caso será um elemento pai. Por exemplo: body(filho) de html(pai).

* rem => Relativo ao tamanho da font do elemento raiz

```CSS
:root {

}

div {
  font-size: 32px;
}

p {
  font-size: 1.6em; 
}
```

> OBS: html === root

* vw => Relativo ao 1% da viewport width.

* vh => Relativo ao 1% da viewport height.

> OBS: Toda a tela de um site é uma viewport
