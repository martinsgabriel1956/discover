# Corrigindo conflitos de merge

git log => Para ver o diagnostico do repositório
git status => para vê o status do repositório

> OBS: O comando "git config" utilizando a flag "--global" indica que aquela determinada configuração será aplicada no git num geral, em outras palavras, a configuração será aplicada pra qualquer repositório existe ou novo.

Por padrão a configuração do pull é git config pull.rebase false, para poder utilizar o comando merge daquele repositório.

Um erro muito comum de conflitos de merge é quando há alterações no repositório do github, porém, não foi feito um pull para o repositório remoto com essas alterações e além disso, realizar alterações no repositório remoto e querer fazer um push para a origin.

Esse erro ocasiona que não possa ser feito um merge automático, fazendo com que precisamos realizar essa alteração manualmente escolhendo se a alteração de uma linha ou bloco de código da current (remoto), ou da incoming(github), ou deixar as duas irão ser registradas nos arquivos do repositório para a realização posteriormente do git push.

> OBS: Depois de corrigir o merge, precisamos adicionar na stage e fazer um commit para após essas operações realizar o push para a origin.
