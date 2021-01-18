# Função construtora

Quando declaramos uma variável e o valor é new seguido do nome da função, ela se torna uma função construtora. E irá retornar um objeto dentro da função.

```Javascript
function Person() {}

const gabriel = new Person();
console.log(gabriel)
```

Apoś isso, dentro da função terá uma palavra chave chamada **this**, que irá se referir dentro da função à variável que adicionamos um objeto dentro, que no caso acima é **const gabriel**. Então, para adicionarmos valores dentro do objeto, fazemos dessa maneira aqui:


```Javascript
function Person(name) {
  this.name = name;
}

const gabriel = new Person('Gabriel');
console.log(gabriel)
```

Se repararmos no exemplo acima, vimos que quando criamos um novo objeto usando **new Person**(nome da função), passamos o valor do parâmetro name(no exemplo, está Gabriel), que foi declarado na função e que a propriedade name da const gabriel recebeu como valor o parâmetro name da função.

Sempre que queremos instanciar uma nova propriedade dentro da função, podemos ir criando novos atributos/propriedades, porém, ele vai ser aplicado em todos os objetos que criarmos dentro. Sendo assim, podemos acessar esses atributo quando quisermos.

> OBS: Ao declararmos a função não é obrigado começar com letra maiúscula, porém, é uma boa pratica visto que existe funções construtoras padrões no javascript, como: String, Number, Date

```Javascript
const nome = new String("Gabriel");
const numero = new Number(21);
const data = new Date("2020-12-24");

console.log(nome);
console.log(numero);
console.log(data);
```