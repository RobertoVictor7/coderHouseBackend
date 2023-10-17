function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const occurrencesObj = {};
  const min = 1;
  const max = 20;
  const numberOfRandoms = 10000;
  
  for (let i = 0; i < numberOfRandoms; i++) {
    const randomNumber = generateRandomNumber(min, max);
    if (occurrencesObj[randomNumber]) {
      occurrencesObj[randomNumber] += 1;
    } else {
      occurrencesObj[randomNumber] = 1;
    }
  }
  
  console.log(occurrencesObj);