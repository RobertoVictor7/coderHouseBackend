const fs = require('fs');

const info = {
    conteudoStr: JSON.parse(fs.readFileSync('./package.json')),
    conteudoObj: fs.readFileSync("./package.json", "utf-8"),
    // size: fs.readFileSync("./package.json", "utf-8"),
}

console.log(info)