const objetos = [
    {
      macas: 3,
      peras: 2,
      carne: 1,
      frango: 5,
      doces: 2
    },
    {
      macas: 1,
      cafes: 1,
      ovos: 6,
      frango: 1,
      paes: 4
    }
  ]
  
  const keys = []
  
  objetos.map((obj) => {
    const getKeys = Object.keys(obj);
    getKeys.map((key) => {
      if (!keys.includes(key)) keys.push(key)
    })
  })
  
  console.log(keys)
  
  let somatoria = 0
  
  objetos.map(obj => {
    somatoria += Object.values(obj).reduce((v1, v2) => v1+v2)
  })
  
  console.log(somatoria)