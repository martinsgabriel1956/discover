# Tipos de Controle de Versão

Existe três tipos de sistemas:

## Sistemas locais:

Esse tipo de sistema consiste em:

- Copiar os arquivos de um diretório para o outro
- Muito comum e simplês
- Incrívelmente propenso a erros, por ter a possibilidade de sobrescrever um arquivo ou diretório por engano que estava certo.

Porém, para superar esse erros, existe o RCS => Revision Control System.

Antigamente muito popular para controle de versão, ele mantem conjuntos de alterações(versões) tendo um espaço especial no disco e podendo recriar como qualquer arquivo que se parecia em qualquer ponto no tempo, adicionando-se todas as alterações ao arquivo.

> OBS: O grande problema do RCS é a dificuldade de compartilhar um projeto ou colaborar com outros projetos de desenvolvedores em outros sistemas.

## Sistema Centralizados

Alguns dos mais conhecidos dos sistemas centralizados, são: CVS, Subversion e Perforce.

Esse sistema consiste em:

- Um único servidor que contém todos os arquivos de controle de versão.
- Vários clientes usam arquivos a partir desse lugar central.

> OBS: Por muitos anos, esse tem sido o padrão de controle de versão.

### Vantagens

- Controle sobre as atividades dos colaboradores no projeto.
- Os administradores têm controle refinado sobre quem pode fazer o quê dentro do projeto.
- Mais fácil de administrar um CVCS do que lidar com bancos de dados locais em cada cliente.

### Desvantagens

- Se esse servidor der problema por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando.
- Se o disco rígido do banco de dados central for corrompido, você perder absolutamente tudo.

## Sistema Distribuídos

Alguns dos mais conhecidos dos sistemas distribuídos, são: Git, Bazaar e Darcs.

- Duplicar (clonar) localmente o repositório completo.
- Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor.
- Cada clone é de fato um backup completo de todos os dados.
- Clientes usam o estado mais recente dos arquivos.
