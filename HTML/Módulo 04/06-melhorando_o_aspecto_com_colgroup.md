# Melhorando o Aspecto com Colgroup

Existe uma Tag responsável em fazer o agrupamento da tabela, chamada colgroup e. Para definirmos quantas colunas ocupará, basta passarmos a tag col:

```HTML
  <table>
    <colgroup>
      <col >
      <col span="2" style="background-color:red">
      <col span="2" style="background-color:blue">
    </colgroup>

    <thead>
      <tr>
        <th rowspan="2"></th>
        <th colspan="2">Magalhães Bastos</th>
        <th colspan="2">Ricardo de Albuquerque</th>
      </tr>
    </thead>
  </table>
```

> OBS: Dentro do colgroup, se queremos que ele ocupa uma quantidade de colunas, basta usarmos apenas o atributo span, pois, ja identifica que é uma coluna e fazendo conexão com os rowspans e colspans.

