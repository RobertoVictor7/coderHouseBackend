const fs = require('fs');
const bcrypt = require('bcrypt');

function gravarUsuarios(usuario) {
    const usuarios = carregarUsuarios();
    const usuarioExistente = usuarios.find((usu) => usu.nome == usuario.nome)

    if(usuarioExistente) {
        console.log("Este usuário já existe");
        return
    }

    const senhaHash = bcrypt.hashSync(usuario.senha, 10);

    usuarios.push({nome: usuario.nome, senha: senhaHash});

    fs.writeFileSync('Usuarios.json', JSON.stringify(usuarios, null, 2))
}


function carregarUsuarios() {
    try {
        const data = fs.readFileSync('Usuarios.json');
        return JSON.parse(data)

    }catch(error) {
        return [];
    }
}


function validarUsuario(nome, senha) {
    const usuarios = carregarUsuarios();
    const usuario = usuarios.find((usu) => usu.nome === nome);

    if(!usuario) {
        console.log("Usuário inexistente")
    }

    if(bcrypt.compareSync(senha, usuario.senha)) {
        return 'Usuario logado com sucesso'
    }else {
        return 'Senha inválida'
    }
}

const usuario1 = {
    nome: "Jão da silva",
    senha: "12345"
}

gravarUsuarios(usuario1)

const usuarioValidado = validarUsuario('Jão da silva', "12345");

console.log(usuarioValidado)