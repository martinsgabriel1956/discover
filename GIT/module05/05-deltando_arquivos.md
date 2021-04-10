# Deletando arquivos

> OBS: Quando restauramos um arquivo que foi "apagado" do diretório, no git status nem aparece o arquivo que foi restaurado.

Quando não queremos uma determinada modificação seja adicionado no determinado commit, basta utilizarmos o comando:

```bash
  git restore --staged NomeDoArquivo
```

Para removermos um arquivo pelo git, basta utilizarmos o comando:

```bash
  git rm nomeDoArquivo
```

> OBS: Uma curiosidade é que esse rm é vinda do sistema unix, o mesmo comando que utilizamos no MAC e nas distribuições linux.
> OBS: Quando utilizarmos esse comando, o arquivo apaga literalmente da maquina, em outras palavras, o arquivo foi apagado direto sem ir para lixeira do sistema. E inclusive o arquivo já fica na stage area.
