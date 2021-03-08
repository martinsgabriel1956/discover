# While (enquanto)

Estrutura de repetição que consiste na seguinte anatomia:

```Js
  while(true) {
    //Bloco de código
  }
```

> OBS: Se passarmos true como condição no while, ele nunca sairá desse loop.

Podemos declara e nomear uma variável e passar uma condição dentro do while com essa variável:

```Js
  let i = 0;

while(i < 10) {
  console.log(i);
  i++;
}
```

Em outras palavras a funcionalidade é bem parecida com a do for, porém, o while é mais utilizado quando não sabemos o momento que irá parar o loop.

