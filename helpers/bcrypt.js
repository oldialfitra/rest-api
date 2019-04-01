const bcrypt = require('bcryptjs'),
env = require('dotenv').config()

module.exports = {
    encrypt(password) {
        return bcrypt.hashSync(password, 8)
    },
    decrypt(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
}