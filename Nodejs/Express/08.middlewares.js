const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res)=>{
    console.log(req.body)
    res.send('OK in User. ')
})

app.post('/book', (req, res)=>{
    console.log(req.body)
    res.send('OK in Book. ')
})

app.listen(80, ()=>{
    console.log('running at http://127.0.0.1')
})
