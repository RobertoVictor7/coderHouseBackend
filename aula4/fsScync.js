const fs = require('fs')

fs.writeFileSync('./exemplo.txt', 'Oi coders, estou em um arquivo!')

if (fs.existsSync('./exemplo.txt')) {
  let conteudo = fs.readFileSync('exemplo.txt', 'utf-8')

  console.log(conteudo)
  fs.appendFileSync('./exemplo.txt', 'Mais Conteudo')

  conteudo = fs.readFileSync('./exemplo.txt', 'utf-8')

  console.log(conteudo)

  fs.unlinkSync('./exemplo.txt')
}
