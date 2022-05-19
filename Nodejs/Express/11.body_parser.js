const qs = require('querystring')

const bodyParser = (req, res, next) => {

    let str = ''
    req.on('data', (chunk)=>{
        chunk_str = '' + chunk
        console.log(chunk_str)
        str += chunk
    })
    req.on('end', () => {
        console.log(str)
        // TODO: 
        const body = qs.parse(str)
        console.log(body)
        req.body = body
        next()
    })

}

module.exports = bodyParser