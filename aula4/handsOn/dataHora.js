const fs = require('fs');

let dateNow = new Date().toLocaleString()

fs.writeFile('./dataHoraAtual.txt', dateNow, (error) => {
    if(error) return console.log('erro ao gravar arquivo');

    fs.readFile('./dataHoraAtual.txt', 'utf-8', (error, resultado) => {
        if(error) return console.log('erro ao ler arquivo');
        console.log(resultado)
    })
})