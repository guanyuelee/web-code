const express = require('express')

const app = express()

app.use(express.static('./clock'))

app.listen(80, ()=>{
    console.log('Express server is running at http://localhost:80')
})



