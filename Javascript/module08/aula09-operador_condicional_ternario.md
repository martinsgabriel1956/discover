# Operador Condicional (Ternário)

Dependendo da condição, iremos receber valores diferentes

```Js
  let pao = true;
  let queijo = false;

  // const niceBreakfast = pao && queijo ? 'Café top' : 'café ruim'
  const niceBreakfast = pao || queijo ? 'Café top' : 'café ruim'

  console.log(niceBreakfast);

  let age = 18;

  const canDrive = age >= 18 ? "Can drive" : "Can't drive";//

  console.log(canDrive);
```
