# Separando Strings

Se queremos separar frase por cada palavra, usamos o **método split()**, pegando essas palavras e colocando-as dentro de um **array**:

```Javascript
  let phrase = "Eu quero viver um amor";

  let wordArray = phrase.split(" ");

  console.log(wordArray, phraseWithUnderscore);
```

Se quisermos juntar todas essas palavras, usamos o **método join()**:

```Javascript
  let phrase = "Eu quero viver um amor";

  let phraseJoining = wordArray.join("");
  
  console.log(wordArray, phraseWithUnderscore);
```

> OBS: Porém, ao juntar se não definirmos o **espaçamento**, as palavras irão ficar todas juntas em apenas uma "palavra":

```Javascript
  let phrase = "Eu quero viver um amor";

  let phraseWithSpacing = wordArray.join(" ");
  
  console.log(phraseWithUnderscore);
```

Usamos o um espaço entre as **""** do **join()**, para poder definir um espaçamento entre as palavras.
