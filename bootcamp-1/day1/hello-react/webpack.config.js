var path = require('path')
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve('src/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel', // or 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
        ],
    }
}
