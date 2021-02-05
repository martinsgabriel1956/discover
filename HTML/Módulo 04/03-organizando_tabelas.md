# Organizando Tabelas

Precisamos organizar algumas questões na tabela que ficam mais semântico, tipo o que veremos abaixo:

```HTML

<table> <!--Container que ficará a tabela-->

  <caption>Pessoas por idade:</caption> <!--Descrição da tabela-->
  <thead> <!--Onde fica os cabeçalhos da tabela-->
    <tr> <!--Linha da tabela-->
      <th> <!--Cabeçalho da tabela-->
        Nome
      </th> 
      <th>
        Idade
      </th>
    <tr>
  </thead>
  <tbody> <!--Onde fica o corpo da tabela, o conteúdo dela-->
    <td> <!--Dados da tabela-->
        Gabriel
      </td>
      <td>
        21
      </td>
    </tr>
    <tr>
  </tbody>
  <tfoot> <!--Rodapé da tabela-->
    <tr>
      <td>Total:</td>
      <td>2 Pessoas</td>
    </tr>
  </tfoot>
</table>
```
