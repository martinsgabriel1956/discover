# Corrigindo o ultimo commit

Podemos corrigir o ultimo commit através do comando abaixo:

```bash
  git commit --amend
```

Podemos corrigir a mensagem do commit adicionando o -m "novaMensagemDeCommit":

```bash
  git commit --amend -m "new commit message"
```

> OBS: Como na arquitetura do git, qualquer alteração no projeto irá realizar uma nova numeração para o commit, dito isso, quando alteramos qualquer coisa no commit, por exemplo, a mensagem, ele automaticamente irá mudar a hash do commit.
