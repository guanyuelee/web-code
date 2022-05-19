const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin(
    {
        template: './src/index.html', 
        filename: './index.html'
    }
)

module.exports = {
    // mode: production
    mode: 'development', 
    entry: path.join(__dirname, './src/index.js'), 
    output: {
        path: path.join(__dirname, "./dist"),   
        filename: 'main.js'
    }, 
    // plugin array
    plugins: [htmlPlugin],

    devServer: {
        open: true, 
        host: 'localhost', 
        port: 80
    }
}