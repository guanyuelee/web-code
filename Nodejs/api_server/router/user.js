const express = require('express')
const router = express.Router()

const routerHandler = require('../router_handler/user')

const expressJoi= require('@escook/express-joi')
const {reg_reguser_schema} = require('../schema/user')

router.post('/reguser', expressJoi(reg_reguser_schema), routerHandler.regUser)

router.post('/login', expressJoi(reg_reguser_schema), routerHandler.login)

module.exports = router

