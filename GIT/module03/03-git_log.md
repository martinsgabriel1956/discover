# Git log

Podemos ver quais foram os pontos da história com o comando git log.

```bash
  git log
```

> OBS: Todo commit tem um nome, que por curiosidade, é escrito com a hash SHA1-1

Dentro do log, ele mostra em qual branch estamos e quais commits foram feitos, o autor do repositório com email, a data atual do log e a mensagem que damos ao realizar um commit.

HEAD => indica em que ponto da história estamos e em qual linha do tempo em nosso histórico do projeto.
Branch => é a linha do tempo dentro do projeto.

Podemos utilizar de uma forma resumida o comando de log, basta digitar o comando abaixo.

```bash
  git log --oneline
```

> OBS: Quando utilizamos a flag oneline, no log não aparece o author e a hora que foi realizado aquele log.

Em um projeto que foi realizado muitos commits, podemos filtrar mostrando os últimos cinco commits, com o comando:

```bash
  git log -n 5
```

Podemos trazer os commits que foram realizados desde uma data em específico, basta usarmos o comando:

```bash
  git log --since=dataEmEspecificoDeTrásPraFrente
```

Podemos fazer o inverso do exemplo acima, em que queremos os commit anteriores a aquela data em específico, basta utilizarmos:

```bash
  git log --util=dataEmEspecificoDeTrásPraFrente
```

Podemos filtrar pelos autores do commit, basta utilizarmos:

```bash
  git log --author=nomeDoAutor
```

Outra maneira de utilizar o log, é através do grep (Global expression regular), com ele podemos fazer a filtragem ou pesquisas pela mensagem dos commits que realizamos.

```bash
  git log grep="init"
```
