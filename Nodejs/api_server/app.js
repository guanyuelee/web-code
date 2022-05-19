const express = require('express')
const cors = require('cors')
const joi = require('joi')
const expressJWT = require('express-jwt')
const config = require('./config')

const app = express()
app.use(cors())

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.cc = function (err, status=1) {
        res.send({
            status: status, 
            message: err instanceof Error? err.message : err,
        })
    }
    next()})

app.use(expressJWT({secret: config.jwtSecretKey, 
    algorithms: ["HS256"]}).unless({path: [/^\/api/]}))

const userRouter = require('./router/user')
app.use('/api', userRouter)
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

app.use((err, req, res, next) => {
    if(err instanceof joi.ValidationError){
        return res.cc(err)
    }
    if(err.name === 'UnauthorizedError') {
        return res.cc(err)
    }
    res.cc(err)
})

app.listen(3007, () => {
    console.log('API server runs at http://127.0.0.1:3007')
})