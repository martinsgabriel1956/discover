# Vídeo

Podemos utilizar video dentro do HTML, basta usar a tag vídeo nativa do HTML:

```HTML
  <video src="./assets-example/rocket.mp4"></video>
```

Porém, em alguns navegadores podem não reconhecer o vídeo adicionado. Existe algumas opções para se resolver esse problema:

- Podemos usar o atributo type, para indicar de qual extensão de vídeo está sendo adicionado na tag.

```HTML
  <video src="./assets-example/rocket.mp4" type="video/mp4"></video>
```

- Podemos utilizar a tag source, em que podemos usar mais de um.

```HTML
  <video type="video/mp4" controls>
    <source src="./assets-example/rocket.mp4">
  </video>
```

- Outra opção se nenhuma nativa funcionar é utilizar serviços de terceiros, como: Youtube, Dailymotion, Facebook, Instgram, etc.

Existe outros atributos que podemos utilizar para pode modificar o player do HTML, como:

- Width e Height => Para definir o tamanho do player.
- autoplay => Quando carregar a página, o vídeo já é iniciado.
- preload => Começa a carregar os dados do vídeo antes de terminar de carregar a página.
  - none => Não realiza o preload de
  - metadata => apenas os dois mais simples e triviais.
  - auto => Faz o preload automaticamente.
- muted => Ao dar play no vídeo, o vídeo inicia mutado.
