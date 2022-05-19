const express = require('express')
const cm = require('./11.body_parser')

const app = express()

app.use(cm)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, function(){
    console.log('Express server is running at http://127.0.0.1')
})