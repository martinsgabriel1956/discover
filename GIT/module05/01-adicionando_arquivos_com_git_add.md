# Adicionando arquivos com git add

Usamos o git add para poder adicionar o arquivo na stage area para poder realizar o commit.

> OBS: Stage area pode ser chamado de index ou stage tree.
> OBS: Existe outra maneira de chamar o Working directory, podemos chamar de Working tree.

Para adicionar um arquivo ou mais para ser comitado, basta:

```bash
  git add nomeDoArquivo
```

Para adicionar todos os arquivos do diretório, basta:

```bash
  git add .
```

> OBS: Antes de adicionarmos o arquivos na stage area, os arquivos ficam untracked (não rastreados).

Podemos adicionar os arquivos por extensão, basta usarmos o comando:

```bash
  git add *.extensãoDoArquivo
```
