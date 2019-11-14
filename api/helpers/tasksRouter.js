const router = require('express').Router();

const Tasks = require('../helpers/tasksModel')

router.get('/', (req,res) => {
    Tasks.find()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error =>{
            res.status(500).json({message: 'nope'})
        })
})

router.post('/', (req,res) => {
    Tasks.add(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error =>{
            res.status(500).json({message: 'nope'})
        })
})


module.exports = router;

