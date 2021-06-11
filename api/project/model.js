// build your `Project` model here
const db = require('../../data/dbConfig')

const get = () => {
    return db('projects')
  }

const getById = (project_id) => {
    return db('projects').where('project_id', project_id).first()
  }

const create = (project) => {
    return db('projects').insert(project)
    .then(([id]) => getById(id))
  }

module.exports = {
    get,
    getById,
    create
  }