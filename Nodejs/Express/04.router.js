const express = require('express')

const router = express.Router()

router.get('/user/list', (req, res)=> {
    res.send('Get user list. ')
})

router.post('/user/add', (req, res) => {
    res.send('Add user successful. ')
})

module.exports = router