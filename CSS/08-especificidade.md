# Especificidade

Calculo matemático em que cada tipo de seletor e origem de estilo, possuem valores a serem considerados. São eles:

* 0 => Seletor universal, combinators e negation pseudo-class (:not())
* 1 => Element type selector e pseudo-elements (::before, ::after)
* 10 => Classes e attribute selectors ({type="radio"})
* 100 => ID Selector
* 1000 => Inline

```HTML
  <body>
    <!-- 1000 -->
    <h1 style="color: orange" class="title" id="my-title">Título</h1>
  </body>
```

```CSS
#my-title { /* 100 */
  color: gray;
}

.title { /* 10 */
  color: red;
}

h1 { /* 1 */
  color: blue;
}

* { /* 0 */
  color: green;
}
```

> OBS: Como o mais forte é o inline (1000), mesmo um seletor tipo global, combinators ou negation são últimos a serem declarados na cascata, por o calculo ser igual a zero ele não influênciará os seletores do tipo 1. E assim sucessivamente para os outros da lista acima.

Como é um calculo, podemos somar entre eles até atingir algum seletor que queira sobrescrever. Em outras palavras, podemos juntar diversos seletores até dar um número maior que um do tipo ID, por exemplo. Olha como ficaria:

```CSS
#my-title {
  color: gray;
}

.title {
  color: red;
}

h1#my-title { /* 1 + 100 = 101 (maior que o #my-title de cima) */
  color: blue;
}

* {
  color: green;
}
```

> OBS: Para aplicar em mais de um elemento, basta usarmos a virgula para separarmos, como vimos antes.
