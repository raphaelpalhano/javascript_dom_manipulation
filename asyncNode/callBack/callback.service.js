const https = require('https');

const URL = "https://dog.ceo/api/breeds/image/random";

const request = https.get(URL, (res) => {
    console.log('statusCode:', res.statusCode);

}).on('error', (err) => {
    console.log(err)
})
console.log("process request");


request.end();



