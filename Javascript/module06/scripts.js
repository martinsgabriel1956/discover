function Person(name) {
  this.name = name;
  this.walk = () => {
    return this.name + " está andando";
  };
}

const gabriel = new Person('Gabriel');
const denilson = new Person('Denilson');
const olivia = new Person('Olivia');

console.log(gabriel.walk());
console.log(denilson.walk());
console.log(olivia.walk());

const nome = new String("Gabriel"); // Função construtora pra Strings
const numero = new Number(21); // Função construtora pra Numbers
const data = new Date("2020-12-24"); // Função construtora pra Dates

console.log(nome);
console.log(numero);
console.log(data);