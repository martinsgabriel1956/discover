# Modificando Arquivo Local e Enviando Para Repositório Remoto

Existe duas maneira de adicionarmos no stage e fazermos o commit:

- A primeira é digitando dois comandos

```git
  git add .
  git commit -m "mensagem"
```

- A outra maneira é com apenas um comando fazemos essas duas ações acima

```git
  git -am "mensagem"
```

> OBS: Vale lembrar que,  a segunda maneira só funciona para atualizar os arquivos que já estão na stage area, não funciona quando está fazendo o primeiro envio a stage area e commit.

Quando ja fizemos o remote e fizemos um push para a núvem do github, quando enviarmos pela segunda vez a alteração da branch main, basta só darmos esse comando:

```git
  git push
```

Isso acontece, pois, o github e o git sabem que essa conexão entre o remoto e a origin já foi feita e que a branch principal é a main, então ambos entendem automaticamente que essas alterações serão levadas diretamente a branch principal (main) da origin.
