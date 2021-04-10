# Hash SHA-1

O nome é dado através de um valor Hash chamado de SHA-1 para cada commit.

O git a cada commit, vai gerar um checksum, isso significa que, ele irá pegar todos os dados do commit e converter em números no formato SHA-1. O Objetivo disso é garantir uma integridade de dados, em outra palavras, a cada modificação feita no arquivo irá gerar um número diferente, aumentando a segurança daqueles dados.

> OBS: O SHA-1 tem 40 caracteres e são hexadecimais (vai de A hà F, de 0 à 9).

Dentro desse número, está contendo um Snapshot de como estava o projeto naquele momento do commit, adicionando informações a mais que são:

- parent
- author
- message

> OBS: O primeiro commit não tem nenhum pai, pois, não tem um arquivo de referência.
