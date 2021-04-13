# Desfazendo modificações

Podemos restaurar um arquivo em que foi feito alguma modificação indesejada para o estado anterior do arquivo, basta utilizarmos o comando:

```bash
  git restore nomeDoArquivo
```

> OBS: Quando damos um git status, o próprio git te dá dicas dos próximos passos a seguir com aqueles arquivos, no caso dos que foram modificados, o git mostra dois caminhos: de dar um git add e mandar para stage area ou restaurar o estado anterior do arquivo, consequentemente apagando aquelas ultimas alterações feitas.
