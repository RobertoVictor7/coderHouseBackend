const express = require ('express');
const router = express.Router();

const pets = []

router.get('/', (req, res) => {
    res.json(pets);
})

router.post('/', (req, res) => {
    const novoPet = req.body.nomeAnimal;
    

    pets.push(novoPet)
    res.json(novoPet)
})

module.exports = router