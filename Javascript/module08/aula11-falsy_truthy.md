# Falsy e Truthy

Quando um valor é considerado false em contextos onde um booleano é obrigatório(condicionais e loops)

* False
* 0
* -0
* ""
* null
* undefined
* NaN

> OBS: Em um contexto de condicionais, podemos usar o valor acima como o booleano obrigatório, em que ocorre o type coersion transformando num valor Falsy.

Quando um valor é considerado true em contextos onde um booleano é obrigatório(condicionais e loops)

* true
* {}
* []
* 1
* 3.23
* "0"
* "false"
* -1
* Infinity
* -Infinity
