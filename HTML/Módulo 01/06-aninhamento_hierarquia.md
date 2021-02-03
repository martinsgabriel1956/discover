# Aninhamento hierarquia

aninhamento de tags === colocar uma tag dentro da outra

em === tag que dá enfase(itálico)

Hierarquia === A tag que está dentro é a tag filha, e a tag que está envolta da tag filha é tag pai.

```HTML
  <div> <!--Essa é a tag pai de todas as outras dentro dele-->
    <h1> <!--Essa tag é filha da tga div, porém, é pai da tag p, consequentemente da tag a também-->
      <p> <!--Essa tag é filha da tag h1, porém, é pai da tag a -->
        <a href="http://google.com"></a> <!-- Essa tag é filha da tag p-->
      </p><!--Essa tag é filha da tag h1, porém, é pai da tag a -->
    </h1><!--Essa tag é filha da tga div, porém, é pai da tag p, consequentemente da tag a também-->
  </div> <!--Essa tag é pai de todas as outras dentro dele-->
```

Fluxo === Cada tag é lida conforme for sendo adicionada na página(de cima para baixo);

Posicionamento dos elementos === Cada tag tem seu tipo de posicionamento, ou em linha ou bloco tendo quebra de linha.

```HTML
  <p>Aqui outro texto</p> <!--Quebra linha-->
  <a href="http://google.com"></a> <!--fica em linha-->
```
