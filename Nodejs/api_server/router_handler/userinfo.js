const express = require('express')
const db = require('../db/index')
const bcryptjs = require('bcryptjs')

const getUserInfo = function(req, res) {
    const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'

    db.query(sql, req.user.id, (err, results) => {
        if(err){
            return res.cc(err)
        }

        if(results.length !== 1){
            return res.cc('Failed to get user info. ')
        }

        res.send({
            status: 0, 
            message: 'Get user info successfully. ',
            data: results[0]
        })
    })
}

const updateUserInfo = function(req, res) {
    const sql = 'update ev_users set ? where id=?'

    db.query(sql, [req.body,  req.user.id], (err, results) => {
        if(err) {
            return res.cc(err)
        }
        if(results.affectedRows !== 1){
            return res.cc('Failed to update your information. ')
        }
        res.cc('Update user info OK.', 0)
    })
    
}

const updateUserPsw = function(req, res) {
    const sql = 'select password from ev_users where id=?'

    db.query(sql, req.user.id, (err, results) => {
        console.log(req.user.id)
        if(err){
            return res.cc(err)
        }
        if(results.length !== 1) {
            return res.cc('Failed to update your password. Cannot find Id. ')
        }
        // we can compare the password. 
        const compareResults = bcryptjs.compareSync(req.body.oldPsw, results[0].password)

        if(!compareResults){
            return res.cc('Old password is not correct. ')
        }
        
        const updateSql = 'update ev_users set password=? where id=?'

        req.body.newPsw = bcryptjs.hashSync(req.body.newPsw, 10)

        db.query(updateSql, [req.body.newPsw, req.user.id], (err, results) => {
            if(err) {
                return res.cc(err)
            }
            if(results.affectedRows !== 1){
                return res.cc('Failed to update your password. ')
            }
            res.cc('Update password successfully. ', 0)
        })
    })
}

const updateAvatar = function(req, res) {
    const sql = 'update ev_users set user_pic=? where id=?'

    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        if(err) {
            return res.cc(err)
        }
        if(results.affectedRows !== 1){
            return res.cc('Failed to update your avatar. ')
        }
        res.cc('Update your avatar OK. ', 0)
    })
}

module.exports = {
    getUserInfo, updateUserInfo, updateUserPsw, updateAvatar
}