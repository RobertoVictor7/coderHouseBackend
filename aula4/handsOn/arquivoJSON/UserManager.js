const UserManager = require('./managerUsers')

const userManager = new UserManager();

const primeiroUsuario = {
    nome: 'Victor',
    sobrenome: 'Roberto',
    idade: 22,
    curso: 'ADS'
} 

userManager.criarUsuario(primeiroUsuario)

userManager.leitorUsuariosDoArquivo();

