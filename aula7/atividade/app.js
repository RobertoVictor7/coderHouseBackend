import express from 'express';

const app = express()
app.use(express.json());

const frase = "Servidor com express CoderHouse " 

app.get('/api/frase', (req, res) => {
    const obj = {
        frase: frase
    }
    
    res.send(obj)
})

app.get('/api/palavras/:pos', (req, res) => {
    try {
    let position = req.params.pos

    let palavras = frase.split(" ")

    const teste = palavras.find((item, index) => index == position)

    const obj = {
        busca: teste
    }

    res.send(obj)

    }catch(error) {
        throw error
    }
    
})

app.post('/api/palavras', (req, res) => {
    const palavra = req.body.palavra;
    const novaFrase = frase.concat(palavra)
    
 
    const obj = {
         novaFrase: novaFrase,
         adicionada: palavra
    };
 
    res.send(obj);
 });

 app.put('/api/palavras/:pos', (req, res) => {
    const position = req.params.pos 
    const palavra = req.body.palavra;

    let palavras = frase.split(" ")

    const teste = palavras.map((item, index) => {
        if(index == position) {
            item
        }
    })

    const obj = {
        teste:teste
    }

    res.send(obj);

 })

 app.listen(8080, () => console.log("servidor sendo executado na porta 8080"))