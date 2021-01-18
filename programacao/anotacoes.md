# Fundamentos da Programação

Web(Rede) => No mundo da internet, uma maneira de estruturar trocas de comunicação entre maquinas.


# O que é Programar?

é entender de algoritmos

Algoritmos =>> é um passo a passo ou uma sequência lógica para se resolver algum problema.

Lógica de programação =>> é a construção do algoritmo

Computador não tem a capacidade de pensar, apenas calcula e processa. Onde precisamos entender o problema e dar as instruções a maquina.

Linguagem de programação =>> usando uma linguagem que o computador entenda, passamos instruções que passamos ao computador de como ele deve executar aquele algoritmo.

Algoritmo === Receita de bolo

Dados => informações dentro de um algoritmo, onde exite tipos de dados:

- String => tipo texto
- Numérico => tipo numérico, onde existe dois tipos de numéricos:
  - Inteiros => números sem ser quebrados, sem a utilização de uma virgula
  - Ponto flutuante => números quebrados, que utilizam virgula. 
- Booleano => do tipo verdadeiro ou falso.

Programar é resolver problemas, se não entendemos o problema não conseguimos criar um algoritmo.

# Como funciona a WEB

**HTTP**(Hypertext Transfer Protocol) => é um conjunto de regras que tem a função de trocar informações entre computadores. Enviada em pequenos pedaços/pacotes entres esses computadores, chamados **chunks**

**URL** => Identificador de um site (**recurso**).

Após isso, cria uma linha de comunicação entre o o seu computador(**cliente**) e o computador que tem a página(**servidor**), através de um protocolo chamado TCP.

**Cliente** => é o aplicativo, computador ou dispositivo que fez o pedido. Na web, é o **browser**.

**Servidor** => Computador criado para receber os pedidos enviados e enviar as respostas aos pedidos.

**TCP**(Transmission Control Protocol) => Conjunto de regras que servem para garantir que os pacotes chegam corretamente aos pedidos.

O endereço é convertido em um **IP** através de um **DNS**.

**IP**(Internet Protocol) => Conjunto de regras para a comunicação do endereço, onde o computador do lado do servidor e o cliente tem seus respectivos IPS.

**DNS**(Domain Name Protocol) => Converte o **domínio**(Uma maneira mais fácil de lembra o que iremos digitar na **URL**) em um endereço **IP**

> OBS: o **S** depois do http, indica que o protocolo é seguro

O pedido está percorrendo por diversos proxies.

**Proxy** => Qual dispositivo que fica entre a comunicação do cliente com o servidor. Tipo: roteador, modem, outros computadores, etc. 

Onde os pacotes são passados entre cada dispositivo até chegar ao servidor.

O servidor analisa o pedido e te responde.

Caso seja positiva, a resposta faz o mesmo trajeto de volta para o cliente

Montando esses pacotes na tela do cliente em forma de site, como foi pedido.

Onde esse processo é feito diversas vezes, pois, cada novo recurso adicionado é feito uma nova conexão
