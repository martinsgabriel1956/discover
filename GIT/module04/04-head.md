# HEAD

Significa um ponteiro que irá apontar em que ponto da história estamos.

Conseguimos vê para onde a HEAD está apontando, pelo comando **git log** visto anteriormente.

Toda vez que mudamos de branch ou criamos, a HEAD irá apontar para essa nova ou atual branch.

> OBS: Para podermos ver o número de uma branch, basta utilizarmos o comando:

```bash
  cat .git/refs/heads/nomeDaBranch
```
