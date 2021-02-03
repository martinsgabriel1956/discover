# Anatomia documento

```HTML
<!DOCTYPE html> <!--para os navegadores entenderem (os mais antigos, pois, os mais novos ja entendem que é um documento HTML)-->
<html lang="en"> <!--Tag responsável para identificar que á um documento html (elemento pai/root); lang => linguagem do documento-->
  <head> <!--Contém configurações importantes para a página, porém, não visível para o usuário (elemento filho)-->
    <meta charset="UTF-8" /> <!-- configura o grupo de caracteres que terá na página-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- configura a resolução pra diversos tipos de resoluções de tela-->
    <title>Hello World</title> <!-- titulo da página-->
  </head>
  <body> <!-- Parte do documento que é visualizado pelo usuário (elemento filho)-->
    <h1>Título</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit ex magnam tempora, libero iure eveniet quibusdam blanditiis, architecto possimus error amet, impedit numquam ab sunt exercitationem magni repudiandae voluptates!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit ex magnam tempora, libero iure eveniet quibusdam blanditiis, architecto possimus error amet, impedit numquam ab sunt exercitationem magni repudiandae voluptates!
    </p>
  </body>
</html>
```