const itheima = require("./itheima-tools")

const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)

const htmlStr = '<h1 title="abc">This is h1 label<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)

const htmlStrBack = itheima.htmlUnescape(str)
console.log(htmlStrBack)