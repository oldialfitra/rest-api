const router = require('express').Router(),
controllerUser = require('../controllers/user'),
{authentication, authorization, verify} = require('../middleware/auth')

router.post('/signup', controllerUser.signUp)

router.post('/signin', controllerUser.signIn)

router.use('', authentication)

router.get('/users', authorization, controllerUser.getAllUsers)

router.get('/users/:id', verify, controllerUser.getUser)

router.post('/users', authorization, controllerUser.createUser)

router.delete('/users/:id', authorization, verify, controllerUser.deleteUser)

router.put('/users/:id', verify, controllerUser.updateUser)

module.exports = router