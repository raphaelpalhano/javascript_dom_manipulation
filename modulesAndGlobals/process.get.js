const {getTags } = require("./module.tags");

const argv = process.argv.slice(2).toString().split(',').join(' ');
console.log(`You typped: ${argv}`)

// get tag value
const nameArgv = getTags('name');
const surnameArgv = getTags('sobrenome');

console.log(`Olá ${nameArgv} ${surnameArgv}`);
