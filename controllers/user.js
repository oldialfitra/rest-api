const { User } = require('../models'),
    { decrypt } = require('../helpers/bcrypt'),
    jwt = require('jsonwebtoken')

class UserController {

    static signUp(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            role: 'user'
        })
            .then(function (newUser) {
                res.status(201).json(newUser)
            })
            .catch(function (err) {
                res.status(500).json(err.errors[0].message)
            })
    }

    static signIn(req, res) {
        User
            .findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (uLogin) {
                if (!uLogin) {
                    res.status(401).json({
                        message: 'Username / password wrong'
                    })
                }
                else {
                    if (decrypt(req.body.password, uLogin.password) === false) {
                        res.status(401).json({
                            message: 'Username / password wrong'
                        })
                    }
                    else {
                        let token = { token: jwt.sign({ email: uLogin.password, role: uLogin.role, id: uLogin.id }, process.env.SECRET) }
                        res.status(200).json(token)
                    }
                }
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static getAllUsers(req, res) {
        User
            .findAll()
            .then(function (users) {
                res.status(200).json(users)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static getUser(req, res) {
        User
            .findByPk(req.params.id)
            .then(function (user) {
                res.status(200).json(user)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static createUser(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
            .then(function (newUser) {
                res.status(201).json(newUser)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static deleteUser(req, res) {
        User.findByPk(req.params.id)
            .then(function (user) {
                if (!user) {
                    res.status(404).json({
                        message: 'User not found'
                    })
                }
                else {
                    return User.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                }
            })
            .then(function (deletedUser) {
                res.status(200).json(deletedUser)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static updateUser(req, res) {
        User.update({
            id: req.params.id,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (updatedUser) {
                res.status(200).json(updatedUser)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

}

module.exports = UserController