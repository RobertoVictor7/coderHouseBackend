import express from 'express'
const app = express()
app.use(express.urlencoded({ extended: true }))

const usuarios = [
  { id: '1', nome: 'Victor', sobrenome: 'Roberto', idade: 43, genero: 'M' },
  { id: '2', nome: 'Geovanna', sobrenome: 'Correia', idade: 43, genero: 'F' },
  { id: '3', nome: 'Lucas', sobrenome: 'Duarte', idade: 43, genero: 'M' },
  { id: '3', nome: 'Celia', sobrenome: 'Andrade', idade: 43, genero: 'F' },
  { id: '3', nome: 'Lucas', sobrenome: 'Duarte', idade: 43, genero: 'M' },
]

app.get('/', (req, res) => {
  let genero = req.query.genero

  if (!genero || (genero !== 'M' && genero !== 'F')) return res.send({ usuarios })

  let usuariosFiltrados = usuarios.filter(usuario => usuario.genero == genero);
  res.send({usuarios:usuariosFiltrados})
})

// app.get('/:idUser', (req, res) => {
//    let id = req.params.idUser;
//    let usuariosRetorno = usuarios.find(usuario => usuario.id == id)

//    if(!usuariosRetorno){
//     res.send("Usuário não encontrado!")
//    }

//    res.send({usuariosRetorno})
// })

app.get('/exemploqueries', (req, res) => {
  let consultas = req.query

  let { nome, sobrenome, idade } = req.query

  res.send(consultas)
})

app.listen(8080, () => {
  console.log('Executando perfeitamente a partir do Express')
})
