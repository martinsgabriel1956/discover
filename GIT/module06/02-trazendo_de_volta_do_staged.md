# Trazendo de volta do Staged

Para restaurarmos arquivos que estavam no stage area (staged), basta utilizarmos o seguinte comando:

```bash
  git restore --staged nomeDoArquivo
```

> OBS: Em versões anteriores do git, usavam o comando **git reset HEAD nomeDoArquivo**, para realizar essa função. Lembrando que os comandos de versões mais antigas podem ser utilizados tranquilamente.
> OBS: Podemos usar o . referente a todos os arquivos nos comandos git restore/reset
