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
        path: path.join(__dirname, "dist"),   
        filename: 'js/main.js'
    }, 
    // plugin array
    plugins: [htmlPlugin],

    devServer: {
        open: true, 
        host: 'localhost', 
        port: 80
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, 
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.png|jpg|gif$/, use: 'url-loader?limit=22229&outputPath=images'}, 
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}