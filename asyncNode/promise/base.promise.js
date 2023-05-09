
const getUber = (payment) =>  new Promise(async (resolve, reject) => {
    async function paymentValid(value) {
        if(value < 15){
            return false
        }
        return true;
    }

    let valid = await paymentValid(payment);
    if(!valid){
        return reject('uber cancelled');

    }
    return resolve('Uber tracked');
})

getUber(14)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
    getUber(16).then((res) => console.log(res));
})
.finally(() => console.log('request ended!'))

getUber(18)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
.finally(() => console.log('request ended!'))
