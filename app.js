const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000
require('dotenv').config()
routerUser = require('./routes/user')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use('/api', routerSign)

app.use('/api', routerUser)

app.listen(port, function () {
    console.log('Listening on port: ', port)
})