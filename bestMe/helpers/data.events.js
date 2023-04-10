const controlEvents = (questions, eventType, index = 0) => {
    const awsewrs = new Array();

    if(Array.isArray(questions)){
        process.stdout.write(`\n\n ${questions[index].toString().trim()} \n Resposta: `);
        process.stdin.on(eventType, (data) => {
            awsewrs.push(data.toString().trim());
            if(awsewrs.length < questions.length){
                process.stdout.write(`\n\n ${questions[awsewrs.length]} \n Resposta: `);
            }else{
                console.log(`Todas respostas: ${awsewrs}`);
                process.exit(1);

            }
        }); 

    }else if(typeof arg === 'object' && questions !== null){
        process.stdout.write(`\n\n ${JSON.stringify(questions)} \n Resposta: `);
        process.stdin.on(eventType, (data) => {
            process.stdout.write(`${data.toString().trim()} \n\n`);
            process.exit(1);
        }); 


    }
    else{
        process.stdout.write(`\n\n ${questions.toString().trim()} \n Resposta: `);
        process.stdin.on(eventType, (data) => {
            process.stdout.write(`${data.toString().trim()} \n\n`);
            process.exit(1);
        }); 
    }

    process.on('exit', () => {
        console.log('\n\n Finalizando o processo...')
    })
}

module.exports = { controlEvents };