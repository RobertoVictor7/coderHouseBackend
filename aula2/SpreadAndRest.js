let impostos = {
    prop1: 2,
    prop2: "b",
    prop3: true
}

let obj2 = {
    prop1: "c",
    prop2: [2, 3, 5, 6, 7]
}

let {propriedade1, propriedade2} = impostos;

let obj3 = {...impostos, ...obj2}

console.log(obj3)

let obj4 = {
    a: 1,
    b: 2,
    c: 3
}

let {a, ...resto} = obj4;

console.log(resto)