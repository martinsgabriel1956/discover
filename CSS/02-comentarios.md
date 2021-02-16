# Comentários

Assim como no HTML, os comentários não são visíveis nos browsers e tem o intuíto de documentar e organizar o código.

> OBS: Nunca esqueça de fechar um comentário.

```CSS
  body {
  font: 1em/150% Helvetica, arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Let's special case the global fonte size. On large screen or window, we increase the font size for better readability. */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* Elementos específicos */

div p, #id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```
