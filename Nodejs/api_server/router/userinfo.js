const express = require('express')
const userinfoHandler = require('../router_handler/userinfo')
const schema = require('../schema/user')
const expressJoi = require('@escook/express-joi')

const router = express.Router()

router.get('/userinfo', userinfoHandler.getUserInfo)
router.post('/userinfo', expressJoi(schema.update_userinfo_schema), userinfoHandler.updateUserInfo)
router.post('/updatepwd', expressJoi(schema.update_userpsw_schema), userinfoHandler.updateUserPsw)
router.post('/update/avatar', expressJoi(schema.update_avatar_schema), userinfoHandler.updateAvatar)

module.exports = router