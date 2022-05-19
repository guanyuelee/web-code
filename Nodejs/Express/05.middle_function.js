const express = require('express')
const app = express()

const mw = function(req, res, next){
    console.log('The simplest middleware function. ')
    next()
}
app.use(mw)

app.get('/', (req, res)=>{
    res.send('Home page. ')
})

app.get('/user', (req, res)=>{
    res.send('User page. ')
})

app.listen(80, ()=>{
    console.log('http://127.0.0.1')
})