
//exportando direto na função: export function
function sum(a,b){
    return a+b;
}

// exportando com module:

function multiply(a,b){
    return a*b;
}

module.exports = {
    multiply,
    sum
}