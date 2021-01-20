# Encontrando palavras em frases

Para verificarmos se tem algumas **frase** ou alguma **letra** numa **string**, podemos usar o **método includes()**:

```Javascript
  let phrase = "Eu quero viver!";

  console.log(phrase.includes("Amor"));

  let phrase = "Eu quero um amor!";

  console.log(phrase.includes("Amor"));

  let phrase = "Eu gosto do filme, Um Grande Amor!";

  console.log(phrase.includes("Amor"));
```

> OBS: O **método includes()** é Case-Sensitive.
