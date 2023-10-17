const moment = require('moment');

function calculaIdade(nascimento) {
    const dataAtual = moment();
    const dataNascimento = moment(nascimento);

    if(dataNascimento.isValid()) {
        console.log(dataAtual.diff(dataNascimento, 'days'))
    };
} 



calculaIdade("2001-02-07")