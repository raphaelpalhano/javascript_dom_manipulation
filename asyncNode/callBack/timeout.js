function sum(...args){
    return args.reduce((pv, cu) => pv + cu, 0);    
}

function callOther(fn){
    setTimeout(() => {
        console.log('start callback...')
    }, 1)
    console.log(fn(1,2,3));
}

setTimeout(function(){
    callOther(sum);
}, 1000); 


