# Function Scope

Se declaramos uma variável e uma função no escopo global e passarmos para dentro da função o parâmetro tendo o mesmo nome da variável declarada, o valor vai ser atrelado dentro da função e irá retornar o valor inicial da função:

```Javascript
let subject = 'create some videos';

function createThink(subject) {
  return subject;
}

console.log(createThink(subject));
```

Se declararmos uma variável do mesmo nome dentro do escopo da função, ela terá um comportamento diferente. Dentro dessa função, a variável irá pegar o valor inicial do argumento que tem o mesmo nome e retornar com o valor atribuído. Se verificarmos o valor de subject da função irá retornar o valor que atribuímos, porém, se só chamarmos a variável irá mostrar o valor da variável global:

```Javascript
let subject = 'create some videos';

function createThink(subject) {
  subject = 'study';
  return subject;
}

console.log(createThink(subject));
console.log(subject);
```

Se tirarmos esse argumento, a variável do escopo da função irá pegar o valor da variável global, e com isso irá atualizar o valor da variável: 

```Javascript
let subject = 'create some videos';

function createThink() {
  subject = 'study';
  return subject;
}

console.log(createThink(subject));
console.log(subject);
```

Se a função não tiver o retorno, ela terá o valor undefined. Porém, ele irá mudar o valor da variável.

```Javascript
let subject = 'create some videos';

function createThink() {
  subject = 'study';
}

console.log(createThink(subject));
console.log(subject);
```