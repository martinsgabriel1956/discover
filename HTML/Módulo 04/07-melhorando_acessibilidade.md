# Melhorando Acessibilidade

O atributo scope é usado para indicar que um determinado elemento faz parte de um colgroup, ou row, ou col ou rowgroup

```HTML
  <table>
    <caption>Pedidos X Vendidos por Loja</caption>
   
    <colgroup>
      <col >
      <col span="2" style="background-color:red">
      <col span="2" style="background-color:blue">
    </colgroup>

    <thead>
      <tr>
        <th rowspan="2"></th>
        <th colspan="2" scope="colgroup">Magalhães Bastos</th>
        <th colspan="2" scope="colgroup">Ricardo de Albuquerque</th>
      </tr>
      <tr>
        <th scope="col">Produzido</th>
        <th scope="col">Vendidos</th>
        <th scope="col">Produzido</th>
        <th scope="col">Vendidos</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">Vassouras</th>
        <td>50</td>
        <td>30</td>
        <td>20</td>
        <td>20</td>
      </tr>
      <tr>
        <th scope="row">Baldes</th>
        <td>10</td>
        <td>10</td>
        <td>30</td>
        <td>25</td>
      </tr>
    </tbody>
  </table>
```
