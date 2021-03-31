# Margin

São os espaçamentos externos, em outras palavras, são os espaços entre elementos. Em que pode funcionar com 4 propriedades: margin-top, margin-right, margin-bottom e margin-left. E pode receber os valores como: porcentagem, length e auto.

Usamos geralmente o shorthand do margin:

```css
  div {
    margin: 12px 16px 10px 4px; /* Quando aplicamos valores diferentes para cada direção*/
    margin: 12px 16px 0; /*Aplicando para o top, right/left e o bottom*/
    margin: 8px 16px; /*Aplicando para o top/bottom e o right/left*/
    margin: 8px; /* Quando o valor é definido para todas direções */
  }
```

> OBS: Por padrão o browser(user agent) determina estilizações de espaçamento por padrão, para resetarmos isso, basta fazer isso:

```css
  * { /*Seletor root*/
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
```

Margin collapsing apenas acontece quando os elementos estão envolvidos em display block, pois, para ambos se ajustarem em tela um abaixo do outro e compartilham a mesma propriedade, ele ao invés de somar entre si, simplesmente pega que tiver o maior valor e aplica para os dois elementos. Pórem, no display inline isso não acontece, pois, está um do lado do outro.

> OBS: o valor auto faz o calculo dos lados que foram definidos e toda vez que a tela modificar ela irá se modificar com forme o tamanho da tela.
