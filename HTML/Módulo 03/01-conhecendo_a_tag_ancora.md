# Conhecendo a tag âncora

Responsável por interligar entre diversas páginas

> OBS: só funciona se utilizarmos o atributo href, passando o caminho que será redirecionado.

A tag a(âncora) aceita atributos globais, como: title, id, class, etc

```HTML
  <a href="">Conteúdo</a>
```

Dentro do atributo href, podemos passar:

url completa

```HTML
  <a href="https://google.com">Conteúdo</a>
```

fragmento

```HTML
  <a href="#">Conteúdo</a>
```

email

```HTML
  <a href="mailto:usuario2345@gmail.com">Conteúdo</a>
```

telefone

```HTML
   <a href="tel:14541894167">Conteúdo</a>
```

entre outros

Temos o atributo download, que irá fazer o download do conteúdo direcionado da página, ao invés de levar para outro canto

```HTML
   <a href="" download="">Conteúdo</a>
```

Outro atributo muito interessante é o target, que o intuíto dele é como esse link vai levar, em outras palavras, por padrão o target tem o valor de _self, que significa que ao clicar no link ele irá mudar de página, porém, na mesma aba do navegador. Se usarmos o valor de _blank, ao clicar ele irá pra outra página, só que em outra aba.

```HTML
   <a href="" target="_blank">Conteúdo</a>
```
