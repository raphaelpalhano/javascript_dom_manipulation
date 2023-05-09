function callOther(fn){
    console.log('start callback...')
    console.log(fn(1,2,3));
}

function sum(...args){
    return args.reduce((pv, cu) => pv + cu, 0);    
}

callOther(sum);
