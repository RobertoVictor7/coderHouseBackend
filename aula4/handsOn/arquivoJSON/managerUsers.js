const fs = require('fs').promises;

class UserManager {
    constructor() {
        this.fileName = 'Users.json'
    }

    async criarUsuario(usuario){
        try {
            const dadosUsuarios = await this.leitorUsuariosDoArquivo();
            console.log(dadosUsuarios)
            dadosUsuarios.push(usuario);
            await this.escreverUsuarios(dadosUsuarios);
        }catch(error) {
            console.log("Ocorreu um erro na criação: " + error)
        }
    }

    async leitorUsuarios(){
        try {
            const dadosUsuarios = await this.leitorUsuariosDoArquivo();
            console.log('Usuários registrados');

            dadosUsuarios.array.forEach(element => {console.log(element)});

        }catch(error) {
            if(error.code == 'ENOENT'){
                return [];
            }
            throw error;
        }
    }

    async leitorUsuariosDoArquivo(){
        try {
            let dadosUsuarios = await fs.readFile(this.fileName, 'utf-8');
            return JSON.parse(dadosUsuarios);

        }catch(error) {
            console.log(error)
        }
    }

    async escreverUsuarios(dadosUsuarios) {
        await fs.writeFile(this.fileName, JSON.stringify(dadosUsuarios, null, 2));
    }
}

module.exports = UserManager;