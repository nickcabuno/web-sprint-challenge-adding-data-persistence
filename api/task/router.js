// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Task = require('./model')


router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.get()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const tas = req.body
    Task.create(tas)
      .then(newTask => {
        res.status(201).json(newTask)
      })
      .catch(next)
  });

module.exports = router