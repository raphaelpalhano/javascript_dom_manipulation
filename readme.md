Entendendo os módulos


Como funciona os módulos no nodejs?

Os módulos no Node.js permitem que você compartilhe funcionalidades em diferentes partes do seu aplicativo ou entre diferentes aplicativos. Eles são criados para ajudar na organização e modularidade do código. Existem vários tipos de módulos no Node.js, incluindo módulos internos, módulos de terceiros e módulos personalizados.

Para usar um módulo no Node.js, você precisa primeiro carregá-lo usando a função require(). A função require() é usada para carregar um módulo e retorna o objeto exportado pelo módulo.


Exemplo do uso de módulos com require


Por exemplo, se você quiser usar o módulo http, que é um módulo interno do Node.js, você pode carregá-lo da seguinte forma:


const http = require('http');


Isso carrega o módulo http e armazena o objeto exportado pelo módulo na variável http.

Outro exemplo é o uso de módulos personalizados. Digamos que você tenha um arquivo chamado utils.js que contém algumas funções úteis. Você pode exportar essas funções usando o objeto exports do Node.js. Por exemplo:

// utils.js
exports.sum = function(a, b) {
  return a + b;
};

exports.multiply = function(a, b) {
  return a * b;
};

Para usar essas funções em outro arquivo, você pode carregar o módulo utils.js da seguinte forma:

const utils = require('./utils');

console.log(utils.sum(2, 3)); // output: 5
console.log(utils.multiply(2, 3)); // output: 6



Nesse exemplo, estamos usando a função require() para carregar o arquivo utils.js que está no mesmo diretório do arquivo atual. O objeto exportado pelo arquivo utils.js é armazenado na variável utils.

Além disso, o Node.js também permite que você crie módulos em pastas separadas e usar o arquivo index.js dentro da pasta para exportar as funcionalidades da pasta como um módulo. Por exemplo:



Usando o import para os módulos


Como funciona?

O import é uma forma de importar módulos em arquivos JavaScript modernos, que utilizam o padrão ECMAScript 6 (ES6) ou superior. É importante destacar que o import não é suportado em versões mais antigas do JavaScript ou em versões antigas do Node.js que usam o CommonJS.

O import é semelhante ao require do CommonJS, mas possui algumas diferenças. Enquanto o require é síncrono e carrega todo o módulo de uma só vez, o import é assíncrono e permite que você importe apenas partes específicas de um módulo. Além disso, o import não cria variáveis globais como o require, tornando mais fácil gerenciar dependências em grandes projetos.

