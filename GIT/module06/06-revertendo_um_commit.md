# Revertendo um commit

Podemos reverter o commit atual voltando para um ponto na história especifico que queremos, criando um novo commit baseado no ponto em que voltamos, podemos realizar isso utilizando o comando:

```bash
  git revert HEAD~numeroDeCommitParaRetornar
```

O **~12** indica que vamos retornar 12 commits do commit atual, fazendo com com base naquele commit irá criar um novo ponto na história.

> OBS: Só conseguimos utilizar esse comando quando não tivermos nenhum arquivo pendente na stage area ou na working directory.

Outra maneira de realizar o revert, é dessa maneira:

```bash
  git revert hashDoCommitResumido
```
