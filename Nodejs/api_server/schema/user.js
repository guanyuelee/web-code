const joi = require('joi')

// 用户名，密码

const username = joi.string().alphanum().min(6).max(20).required()
const password = joi.string().pattern(/^[\S]{6,20}$/).required()
const repassword = joi.ref('password')

exports.reg_reguser_schema = {
    body: {
        username, password, repassword
    }
}

// const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

exports.update_userinfo_schema = {
    body: {
        nickname, email
    }
}

const oldPsw = password
const newPsw = joi.not(joi.ref('oldPsw')).concat(password)
const renewPsw = joi.ref('newPsw')

exports.update_userpsw_schema = {
    body: {
        oldPsw, newPsw, renewPsw
    }
}

const avatar = joi.string().dataUri().required()

exports.update_avatar_schema = {
    body: {
        avatar
    }
}

