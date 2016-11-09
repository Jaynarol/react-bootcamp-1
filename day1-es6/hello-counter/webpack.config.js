var path = require('path')
var webpack = require('webpack')
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
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
                loader: 'babel!webpack-module-hot-accept',
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
    }
}
