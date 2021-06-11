// build your `Task` model here
const db = require('../../data/dbConfig')

const get = () => {
    return db('tasks')
  }

const getById = (task_id) => {
    return db('tasks').where('task_id', task_id).first()
  }

const create = (car) => {
    return db('tasks').insert(car)
    .then(([id]) => getById(id))
  }

module.exports = {
    get,
    getById,
    create
  }