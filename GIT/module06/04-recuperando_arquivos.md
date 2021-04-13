# Recuperando arquivos

> OBS: Com relação a flag --amend, o mais recomendado para o git é criar uma nova commit com as alterações do que alterar sempre um já existente.

Podemos trazer uma seguinte alteração feita em um commit anterior através desse comando:

```bash
  git checkout inicioDaHashDaCommit -- nomeDoArquivo
```

> OBS: Realizando o comando acima, o git automaticamente adiciona aquele determinado arquivo na stage area.
