// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Task = require('./model')


router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.get()
        const newTasks = tasks.map(newTask => ({...newTask, task_completed: !!newTask.task_completed}))
        res.json(newTasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const tas = req.body
    Task.create(tas)
      .then(newTask => {
        res.status(201).json({...newTask, task_completed: !!newTask.task_completed})
      })
      .catch(next)
  });

module.exports = router