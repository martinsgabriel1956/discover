# iframe

Uma tag muito utilizada para adicionarmos video ou audio de maneira externa sem precisar consumir banda do nosso servidor, é o iframe.

| OBS: iframe significa Inline Frame Element.

A anatomia da tag é constituída por:

```html
  <iframe src="https:youtube.com/" frameborder="0"></iframe>
```

A tag vem com dois atributos padrões para ser utilizado, que é a tag src(source) e a frameborder que indica se o frame terá borda.

Se pegarmos um vídeo no youtube, por exemplo, vimos que virar um iframe cheios de atributos, tipo isso aqui:

```html
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/riyqQmBHDgE" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  >
  </iframe>
```

Como vimos o anteriormente na tag vídeo, podemos utilizar o width e o height, além do src e title. Poreḿ, vemos uns atributos novos como o allow e o allowfullscreen.

- O allow é todo atributo setado para a página como: autoplay, loop, muted, etc.
- allowfullscreen é para indicar que o usuário pode assistir o vídeo em fullscreen como se estivesse no próprio site do youtube.

Podemos usar o iframe também com outros conteúdos como os mapas do google maps.

