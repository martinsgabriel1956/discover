# Citações

Quando pegamos um texto o conteúdo e queremos indicar o criador daquele conteúdo, temos 3 jeitos de fazer isso:

* Pela tag blockquote, que passamos o atributo **cite**, que passará a url de onde pegou a informação.

```HTML
  <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
    O <strong>Elemento HTML <code>&lt;blockquote&gt;</code></strong> (ou <em>HTML Block Quotation Element</em>) indica que um texto externo foi citado.
  </blockquote>
```

* Pela tag **cite** que pega um trecho especifico que fará a referência e adiciona a url:

```HTML
  <p>De acordo com <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
  <cite>página MDN blockquote</cite></a>
  </p>
```

Pela tag **q** que tem a mesma funcionalidade que a tag **cite**.

```HTML
  <p>o elemento quote - <code>&lt;q&gt;</code> - é <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">usado para citação curtas que não precisam de parágrafos ou quebras de linha.</q> -- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
  <cite>página MDN blockquote</cite></a>.</p>
```
