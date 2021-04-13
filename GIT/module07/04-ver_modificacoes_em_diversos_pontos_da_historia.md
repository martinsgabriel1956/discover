# Ver modificações em diversos pontos da história

Podemos ver as modificações que foram feitas do projeto e estão no repositório, utilizando o comando:

```bash
  git show hashDoCommit 
```

Utilizando esse comando, vemos absolutamente tudo que foi mudado dentro de cada arquivo daquele commit.

> OBS: Podemos utilizar a flag --color-words no comando show.

Podemos indicar qual diretório que queremos ver as modificações feitas nele, com isso:

```bash
  git show hashDoCommit -- caminhoDoDiretório
```
