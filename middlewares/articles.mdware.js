const createError = require('http-errors');

function validateBody(req, res, next) {
    if(!req.body.name) {
        next(createError(400, 'Name is required'))
    }
    if(!req.body.type) {
        next(createError(400, 'Type is required'))
    }
    next()
}

module.exports = {
    validateBody
}