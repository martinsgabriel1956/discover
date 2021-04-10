# Revisão prática

Usamos o comando git status para indicar o estado atual do determinado repositório.

```bash
  git status
```

> OBS: Quando os arquivos não são adicionados e comitado, esses arquivos são chamados de untracked(Não rastreados).

Dentro do git status, ele indica em qual branch estamos e o status dos arquivos.

Quando queremos tirar um arquivo os stage area, basta utilizarmos o comando abaixo:

```bash
  git rm --cached nomeDoArquivoComAExtensão
```

> OBS: Quando os arquivos são comitados, independente se foram modificados ou criado no projeto o git irá mostrar o log com os arquivos mudados, quantas linhas foram inseridas e quais foram deletadas.
