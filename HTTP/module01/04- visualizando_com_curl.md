# Visualizando com cURL

cURL =>  é uma ferramenta para trabalhar com diversos protocolos

Ele já vem instalado em sistemas Unix (Linux e Mac) e no windows pode utilizar o Git Bash ou WSL 2. Para rodar o comando, basta passarmos o **curl + url desejada**:

```bash
  curl https://google.com
```

Por padrão, o cURL pega apenas o corpo da requisição, porém, podemos se quisermos também o header podemos utilizar a flag **-i**:

```bash
  curl -i https://google.com
```

> OBS: O cURL sempre aparece o preview das requisições e respostas, ao contrário do DevTools.

Para pegar o log completo da requisição ou resposta, basta passarmos a flag **-v**:

```bash
  curl -v https://google.com
```
