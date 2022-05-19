const express = require('express')
const app = express()

const mw1 = function(req, res, next){
    console.log('1st local middleware. ')
    next()
}

const mw2 = function(req, res, next){
    console.log('2nd local middleware. ')
    next()
}

app.get('/', mw1, mw2, (req, res) =>{
    res.send('Home page. ')
})

app.get('/user', (req, res)=>{
    res.send('User page. ')
})

app.listen(80, ()=>{
    console.log('running at http://127.0.0.1')
})
