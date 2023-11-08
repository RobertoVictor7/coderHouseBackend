import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set("views", __dirname+'/views');
app.set("view engine", "handlebars");
app.use(express.static(__dirname+"/public"));


app.get('/', (req, res) => {
    console.log('teste')

    let testUser = {
        name: "Maria",
        last_name: "Silva"
    }

    res.render('index', testUser)
})

const server = app.listen(8080, () => {
    console.log("Servidor ativo na porta 8080!")
})