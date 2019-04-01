const jwt = require('jsonwebtoken')

module.exports = {
    authentication(req, res, next) {
        if (req.headers.hasOwnProperty('token')) {
            try {
                req.userLoggedIn = jwt.verify(req.headers.token, process.env.SECRET)
                next();
            }
            catch {
                res.status(401).json({ message: `You are not Authenticate` })
            }
        }
        else res.status(401).json({ message: `Login First` })
    },
    authorization(req, res, next) {
        if (req.userLoggedIn.role === 'admin') {
            next()
        }
        else {
            res.status(401).json({
                message: 'User not authorize'
            })
        }
    },
    verify(req, res, next) {
        if (JSON.stringify(req.userLoggedIn.id) === req.params.id || req.userLoggedIn.role === 'admin') {
            next()
        }
        else {
            res.status(401).json({ message: `You are not verified` })
        }
    }
}