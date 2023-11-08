import express, {json} from "express"
import fs from "fs"

const app  = express()

const server = app.listen(8080, () => console.log("Servidor acessível na porta 8080"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
