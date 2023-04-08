const getTags = (tagName) => {
    const tagIndex = process.argv.indexOf(`--${tagName}`);
    if(tagIndex > -1){
        return process.argv[tagIndex + 1];
    }

    return 'Flag inválida!';
}

module.exports = {getTags}