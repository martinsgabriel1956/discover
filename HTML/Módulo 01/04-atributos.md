# Atributos

Atributos são conteúdos extras numa tag, qua o conteúdo do atributo vem dentro dos "":

```HTML
  <img src="img.svg" alt="logo" />
```

Atributo booleano não precisa adicionar valores, pois, ele por si só é suficiente. Isso significa, que ou tem o atributo declarado na tag ou não tem, como vemos no exemplo abaixo:

```HTML
  <input type="text" disable />
  <input type="text" />
```

Com relação Aspas, precisamos prestar a atenção em misturar tipos de aspas. Podemos usar dois tipos: simples(**''**) ou duplas(**""**), porém, não podemos declarar o mesmo tipo de aspas dentro das aspas já criadas, como veremos no exemplo abaixo:

```HTML
  <a href="http://"google".com" ></a>
```

Para resolvermos esse problemas, podemos usar outro tipo de aspas dentro das aspas já declaradas:

```HTML
  <a href="http://'google'.com" ></a>
```
