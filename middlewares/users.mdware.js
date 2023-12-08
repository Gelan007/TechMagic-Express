const createError = require('http-errors')

module.exports.validateBody = (req, res, next) => {
    if (!req.body.firstName) {
        next(createError(400, 'Bad Request: first name required'))
    }
    if (!req.body.lastName) {
        next(createError(400, 'Bad Request: last name required'))
    }
    if (!req.body.email) {
        next(createError(400, 'Bad Request: email required'))
    }
    if (!req.body.password) {
        next(createError(400, 'Bad Request: password required'))
    }

    next()
}