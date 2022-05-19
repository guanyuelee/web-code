const express = require('express')

app = express()

const router = require('./04.router')

app.use(router)

app.listen(80, ()=>{
    console.log('Express server is running at http://127.0.0.1')
})


