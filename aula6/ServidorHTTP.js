const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Ola alunos da coderHouse...")
})

server.listen(8080, () => {
    console.log("Estou executando perfeitamente...")
})