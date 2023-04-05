// Exemplo usando console.log()
console.log("Olá, mundo!");

// Exemplo usando process.argv
const args = process.argv.slice(2);
console.log(args);

// Exemplo usando module.exports
function soma(a, b) {
  return a + b;
}

module.exports = soma;

// ou

// export function somaDois(a,b){
//     return a + b;
// }

// Exemplo usando __dirname e __filename
console.log(__dirname);
console.log(__filename);

// Exemplo usando setTimeout()
setTimeout(() => {
  console.log("Executado após 1 segundo");
}, 1000);

// Exemplo usando setInterval()
let count = 0;
const interval = setInterval(() => {
  console.log(`Executado ${count} vezes`);
  count++;
  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);

