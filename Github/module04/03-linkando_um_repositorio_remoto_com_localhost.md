# Linkando um repositório remoto com localhost

Podemos fazer a conexão entre o repositório remoto com o do github de duas maneira:

- Criando um repositório no github adicionando as informações e adicionando através do **git remote add origin linkDoRepositório** fazendo a conexão do repositório remoto com o do github.
- Criar um repositório pela linha de comando e depois jogar esse repositório no github

Para realizarmos a conexão entre os dois repositório, precisamos realizar 3 passos:

- git remote add origin repositórioNoFormatoSSH
- git branch -M main
- git push -u origin main

> OBS: Adicionar um repositório pela chave SSH cria uma conexão mais segura
