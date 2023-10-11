let impostos = {
    imp1: 200,
    imp2: 300,
    imp3: 200,
    imp4: 100,
    imp5: 100
}

let chaveValor = Object.entries(impostos); // transforma o objeto em um array, aonde cada objeto é um array separado
console.log(chaveValor)

let onlyKeys = Object.keys(impostos); // me tras uma array apenas com as chaves dos objetos
console.log(onlyKeys)

let onlyValues = Object.values(impostos); // me tras um array apenas com o valor dos objetos 
console.log(onlyValues)

let impostosTotais = onlyValues.reduce((valorInicial, valorAcumulado) => valorInicial + valorAcumulado)
console.log(impostosTotais)

// valor inicial = primeiro valor do array onlyValues ou seja 200
// valor acumulado = valores seguintes que serão somados ao valor inicial 