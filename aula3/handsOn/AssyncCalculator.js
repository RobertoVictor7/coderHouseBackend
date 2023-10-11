function soma(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject('Operação desnecessaria')
    } else if (num1 + num2 < 0) {
      reject('A calculadora deve retornar um resultado maior que zero')
    } else {
      resolve(num1 + num2)
    }
  })
}

function subtracao(minuendo, subtraendo) {
  return new Promise((resolve, reject) => {
    if (minuendo === 0 || subtraendo === 0) {
      reject('Operação desnecessaria')
    } else if (minuendo - subtraendo < 0) {
      reject('A calculadora deve retornar um resultado maior que zero')
    } else {
      resolve(minuendo - subtraendo)
    }
  })
}

function multiplicacao(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject('Operação desnecessaria')
    } else if (num1 * num2 < 0) {
      reject('A calculadora deve retornar um resultado maior que zero')
    } else {
      resolve(num1 * num2)
    }
  })
}

function divisao(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject('Operação desnecessaria')
    } else if (dividendo / divisor < 0) {
      reject('A calculadora deve retornar um resultado maior que zero')
    } else {
      resolve(dividendo / divisor)
    }
  })
}

async function calculos() {
    try {
        console.log("Soma: " + await soma(4, 6));
        console.log("Subtração: " + await subtracao(6, 4));
        console.log("Multiplicação: " + await multiplicacao(8, 5));
        console.log("Divisão: " + await divisao(10, 2));

    }catch(error){
        console.error("Nào foi possível executar:" + error)
    }
}


calculos()