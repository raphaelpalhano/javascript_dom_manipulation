// Antes do ECMAScript 6:

const paths = require('path');
const { sum, multiply } = require('./create.modules');

console.log(paths.basename(__dirname));





// Ecmascript 6 +:

// import path from 'path';

// console.log(path.basename(__filename));