const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/view.router.js')

const {Server} = require('socket.io');
const app = express();
const port = process.env.PORT || 8080;

const httpServer = app.listen(port, () => {
    console.log("servidor ouvindo na porta 8080")
})

const socketServer = new Server(httpServer);

app.use(express.static('public'));
app.use('/', routes);
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

socketServer.on('connection', socket => {
    console.log("Novo cliente conectado")

    socket.on('message', data=> {
        console.log(data)
    })

    socket.emit('event_for_individual_socket', 'Esta mensagem só deve ser recebida pelo socket')

    socket.broadcast.emit('event_for_everyone_but_the_current_socket', 'Este evento será visto por todos os sockets conectados, exceto o scoet atual de onde a mensagem foi enviada')

    socketServer.emit('event_for_all', 'Esta mensagem é recebida por todos os sockets conectados')
})