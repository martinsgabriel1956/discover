# Representação visual 

- Arvore DOM:
  - Todos os elementos são Nós
  - Dentro da arvore tem Páis e filhos.
- Estrutura da arvore DOM:
  - Document é referente ao document HTML(Pai de HTML).
    - HTML é a ramificação de document (filho de Document), que em paralelo é referente a tag HTML. Cada
      - Head => referente as tags head(filhos de HTML)
        - Link => referente a tag link (Filhos de Head)
        - Title => referente a tag title (Filhos de Head)
        - Meta => referente a tag meta (Filhos de Head)
        - etc
      - Body => referente as tags body(filhos de HTML)
        - Header => Referente a tag header (filhos de Body)
        - Main => Referente a tag main (filhos de Body)
        - Footer => Referente a tag footer (filhos de Body)
        - etc

> OBS: Como a DOM é um objeto Javascript, ele tem propriedades e métodos. Que também são acessadas através do **.**
