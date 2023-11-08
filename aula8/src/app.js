const express = require ('express');
const usersRouter = require('./routes/users')
const petsRouter = require('./routes/pets')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))


app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)


app.listen(8080, () => {console.log("executando na porta 8080")})