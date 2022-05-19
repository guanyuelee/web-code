const express = require('express')

const app = express()

app.get('/user', (req, res)=>{
    res.send({name: 'zs', age: 20, gender: 'male'})
})

app.post('/user', (req, res)=>{
    res.send('Request Successfully. ')
})

app.get('/', (req, res)=>{
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:id/:name', (req, res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.listen(80, ()=>{
    console.log('`Express` server running at http://127.0.0.1')
})
