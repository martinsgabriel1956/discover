# Criando chave SSH

Chave SSH é um tipo de conexão com da maquina com os servidores do Github. Essa chave tem o intuíto de verificar se a maquina atual tem permissão de conectar com o servidor do Github.

> OBS: Para cada maquina entrando no seu github, deve se criar uma chave SSH

Para se criar uma chave SSH basta no terminal:

```bash
  ssh-keygen -t rsa -b 4096 -C "email utilizado na conta do github"
```

> OBS: No windows, para se gerar basta utilizarmos o terminal bash quando instalamos o git na maquina ou no WSL.

Para pegar a chave SSH gerada na maquina e adicionar no Github, basta:

```bash
  cat ~/.ssh/idDaChave.pub
```

> OBS: Se não souber o id da chave, basta usar:

```bash
  cd ~/.ssh
  ls => para listar todos os arquivos visíveis
```

> Pegar o nome da chave e fazer o passo anterior para pegar a chave

Ele irá mostrar a chave gerada no terminal, basta copiar e jogar dentro do github
