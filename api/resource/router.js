// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')

const {
    validateResource,
  } = require('../middleware/middleware')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.get()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', validateResource, (req, res, next) => {
    const resource = req.body
    Resource.create(resource)
      .then(newResource => {
        res.status(201).json(newResource)
      })
      .catch(next)
  });

module.exports = router