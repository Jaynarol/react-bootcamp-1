const path = require('path')
module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve('src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
}