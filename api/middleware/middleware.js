
function validateProject(req, res, next) {
    console.log(req.body)
    const something = req.body
    if (!something.project_name) {
      res.status(400).json({
        message: 'missing required fields',
      })
    } else {
      req.project = something
      next()
    }
  }

  function validateResource(req, res, next) {
    console.log(req.body)
    const something = req.body
    if (!something.resource_name) {
      res.status(400).json({
        message: 'missing required fields',
      })
    } else {
      req.project = something
      next()
    }
  }

  module.exports = {
    validateProject,
    validateResource
  }