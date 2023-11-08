const express = require ('express');
const router = express.Router();

const users = []

router.get('/', (req, res) => {
    res.json();
})

router.post('/', (req, res) => {
    const novoUser = req.body;

    users.push(novoUser)
    res.json(novoUser)
})

module.exports = router