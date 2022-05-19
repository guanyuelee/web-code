const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.urlencoded({extended: false}))
app.use(parser.json())

app.post('/user', (req, res)=>{
    console.log(req.body)
    res.send('OK in User. ')
})

app.listen(80, ()=>{
    console.log('running at http://127.0.0.1')
})
