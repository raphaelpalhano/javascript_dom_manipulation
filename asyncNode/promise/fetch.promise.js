fetch('https://api.publicapis.org/entries')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }
    return response.json();
  })
  .then(listApi => {
    console.log(listApi)
    fetch(listApi.entries[0].Link)
    .then((res) => {
        return res.text()
    }).then((resp) => {
        console.log(resp)
    })
  })
.catch(error => {
    console.error(error);
  });
