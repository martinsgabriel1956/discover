# Estágios do arquivo

Existe 3 estágios dos arquivos dentro do fluxo do git, mas, primeiro precisamos dizer:

- Modified
- Staged
- Commited

O fluxo do git funciona da seguinte maneira:

- Damos um **git init** para iniciar o git (ou git clone para pode puxar o repositório do github), em que os arquivos do diretório ficam no primeiro estado: Working Directory.
- Após isso, ao darmos o comando **git add**, esses arquivos vão para o segundo estado que é a Stage Area (Local em que os arquivos são preparados para a realização do commit).
- Quando realizamos o commit (com o comando, **git commit**) esses arquivos vão para o ultimo estado, Local repository, em que esse diretório fica guardado no banco de dados do git, chamado de repositório.

Em paralelo, os estados dos arquivos funcionam da seguinte forma:

- Quando os arquivos foram modificados ou criados, esses arquivos estão na Working Directory. Isso significa que o estado desses arquivos, é modified.
- Quando os arquivos são adicionados para commit, em outras palavras vão para Stage Area, o estado dos arquivos é staged.
- Quando o commit é realizado nesses arquivos, automaticamente indo para a Local Directory, o estado dos arquivos é commited.
