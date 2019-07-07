const toyService = require('../services/toy.service.js');
const express = require('express');

const router = express.Router();
module.exports = router;

// GET: Toy list
router.get('/', (req, res) => {
    // console.log('QUERY:', req.query);
    const filterBy = req.query;
    toyService.query(filterBy)
        .then(toys => res.json(toys))
})

// GET: Toy Single
router.get('/:id', (req, res) => {
    const toyId = req.params.id
    toyService.getById(toyId)
        .then(toy => res.json(toy))
        .catch(() => {
            res.status(404).send('UNKNOWN TOY')
        })
})

// DELETE: Toy delete
router.delete('/:id', (req, res) => {
    const toyId = req.params.id
    toyService.remove(toyId)
        .then(() => {
            res.json({})
        })
        .catch(() => {
            res.status(500).send('Could Not Delete')
        })
})
// POST: Toy add
router.post('/', (req, res) => {
    const toy = req.body;
    toyService.add(toy)
        .then(toyWithId => res.json(toyWithId))
        .catch(() => {
            res.status(500).send('Could Not Add')
        })
})
// PUT: Toy edit
router.put('/', (req, res) => {
    const toy = req.body;
    console.log(req.body)
    toyService.update(toy)
        .then(toy => res.json(toy))
        .catch(() => {
            res.status(500).send('Could Not Edit')
        })
})
