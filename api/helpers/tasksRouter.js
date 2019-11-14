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


module.exports = router;

