const db = require('../db/index')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.regUser = (req, res) => {
    // 是否合法
    const userinfo = req.body

    const sqlStr = 'select * from ev_users where username=?'

    db.query(sqlStr, userinfo.username, (err, results) => {
        if(err){
            return res.cc(err)
        }
        if(results.length > 0){
            return res.cc('The username had been used, please use other username.')
        }
        userinfo.password = bcryptjs.hashSync(userinfo.password, 10)
        
        const newUserSql = 'insert into ev_users set ?'
        db.query(newUserSql, 
            {username: userinfo.username, password: userinfo.password}, 
            (err, results) => {
                if(err) {
                    return res.cc(err)
                }
                if(results.affectedRows !== 1){
                    return res.cc('Fail to login, please try again later. ')
                }
                res.cc('Register successfully. ', 0)
            })
    })
}

exports.login = (req, res) => {
    const userinfo = req.body

    const sql = 'select * from ev_users where username=?'

    db.query(sql, userinfo.username, (err, results) => {
        if(err) {
            return res.cc(err)
        }
        if(results.length !== 1) {
            return res.cc('Failed to Login. This username doesn\'t exist. ')
        }

        const compareResult = bcryptjs.compareSync(userinfo.password, results[0].password)

        if(!compareResult) {
            return res.cc('Your password is incorrect. ')
        }
        
        // 清空用户敏感信息
        const user = {...results[0], password: '', user_pic: ''}

        const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn})

        res.send({
            status: 0, 
            message: 'Login successfully. ', 
            token: 'Bearer ' + tokenStr
        })
    })
}