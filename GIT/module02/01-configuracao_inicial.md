# Configuração inicial

A configuração inicial, é feita apenas uma vez por maquina, porém, podemos alterar as configurações quando quisermos.

O primeiro passo é criar a sua identidade no git, pois, cada commit utiliza essas informações que são carimbada de maneira imutável. Para isso, iremos adicionar esses seguintes comandos no terminal:

```bash
  git config --global user.name "Seu nome"
  git config --global user.email "seuEmail"
```

> OBS: Podemos adicionar um nome diferente para um projeto especifico, para isso, basta retirar a flag **--global**.

Podemos trocar o editor padrão do git, que por padrão é o vim. Se o seu caso for, trocar para o VSCode, basta usar o comando abaixo:

```bash
  git config --global core.editor "code -w"
```

Para verificar as configurações, basta utilizarmos o comando:

```bash
  git config --list
```

O comando git config nos permite ver e atribuir variáveis de configuração no git, por exemplo, os de email e nome acima. Essas variáveis podem ser armazenadas em três lugares:

- **etc/gitconfig** => Em que essas configurações são válidas para todos os usuários do sistema, consequentemente em seus diretórios. Para isso, basta passarmos a flag --system para o git config.
- **~/.gitconfig** => Somente o usuário do sistema em que está o .gitconfig irá ler ou mudar as configurações do git. Para isso, basta passarmos a flag --global (como fizemos acima nos exemplos).
- **config** => No diretório Git (**.git/config**), no repositório que está sendo trabalhado.

> OBS: Existe níveis de importância nas configurações dentro do Git, por exemplo, se tivermos um gitconfig no repositório em que estamos trabalhando e essas configurações modificam algo que estão definidas no gitconfig do usuário global, as configurações do repositório irão sobrescrever as do usuário global, em outras palavras, o gitconfig do repositório acaba sendo mais importante naquele determinado projeto do que o gitconfig do usuário.
