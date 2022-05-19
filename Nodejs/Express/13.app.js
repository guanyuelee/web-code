const express = require('express')
const cors = require('cors')

const app = express()

const router = require('./12.api_router')

app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/api', router)

app.listen(80, ()=>{
    console.log('express server runs at http://127.0.0.1')
})