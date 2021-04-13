# Ignorando arquivos e diretórios indesejados

.gitignore => é um arquivo que tem a responsábilidade de ignorar arquivos que estão dentro do nosso repositório

node_modules => é pasta que irá conter todas as nossas dependências e cada dependência tem as suas, e assim sucessivamente.

> OBS: Quando estamos trabalhando em um projeto que utiliza dependências e que tem a pasta node_modules, utilizamos o .gitignore nessa pasta, pois, é uma pasta muito pesada e não há sentido de adicionar ela dentro de um repositório local ou em um repositório público (Github).

Para ignorarmos um diretório, podemos escrevermos dessa maneira:

```git
  node_modules/
```

Quando utilizamos essa **/**,  indicamos que é um diretório, porém, podemos escrevermos sem que ele irá reconhecer.
