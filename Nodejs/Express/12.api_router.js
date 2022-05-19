const express = require('express')

const router = express.Router()

router.get('/get', (req, res) => {
    const query = req.query
    res.send({
        status: 0, 
        msg: 'GET success', 
        data: query, 
        body: req.body}
    )
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0, 
        msg: 'POST success', 
        body: req.body, 
        data: null
    })
})

module.exports = router



