// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')

const {
    validateProject,
  } = require('../middleware/middleware')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.get()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', validateProject, (req, res, next) => {
    const projects = req.body
    Project.create(projects)
      .then(newProject => {
        res.status(201).json(newProject)
      })
      .catch(next)
  });

module.exports = router