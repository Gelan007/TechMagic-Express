const createError = require('http-errors');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function error(msg) {
    return createError(400, msg)
}

function validateBody(req, res, next) {
    if (!req.body.firstName) {
        next(error('First name is required'))
    }
    if (req.body.firstName.length < 2) {
        next(error('First name must be minimum 2 characters'))
    }
    if (!req.body.email) {
        next(error('Email is required'))
    }
    if (!emailRegex.test(req.body.email)) {
        next(error('Invalid email format'))
    }
    if (!req.body.password) {
        next(error('Password is required'))
    }
    if (!passRegex.test(req.body.password)) {
        next(error('Invalid password, must be minimum 8 characters with at least 1 letter and number'))
    }
    if (req.body.age < 18 || req.body.age > 99) {
        next(error('Age must be between 18 and 99'))
    }
    next()
}
function validateBodyPartial(req, res, next) {
    if (req.body.firstName && req.body.firstName.length < 2) {
        next(error('First name must be minimum 2 characters'))
    }
    if (req.body.email && !emailRegex.test(req.body.email)) {
        next(error('Email is required'))
    }
    if (req.body.password && !passRegex.test(req.body.password)) {
        next(error('Invalid password, must be minimum 8 characters with at least 1 letter and number'))
    }
    if (req.body.age && (req.body.age < 18 || req.body.age > 99)) {
        next(error('Age must be between 18 and 99'))
    }
    next()
}

module.exports = {
    validateBody,
    validateBodyPartial
}