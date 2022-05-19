const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log('1st middleware')
    next()
})

app.use((req, res, next)=>{
    console.log('2nd middleware')
    next()
})

app.get('/user', (req, res) => {
    res.send('User page. ')
})

app.listen(80, ()=>{
    console.log('running at http://127.0.0.1')
})
