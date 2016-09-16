var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..', '..');
const APP_PATH = `${ ROOT_PATH }/src`;

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        'app': `${ APP_PATH }/main`
    },
    output: {
        path: `${ ROOT_PATH }/build/`,
        filename: '[name].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${ ROOT_PATH }/index.html`
        })
    ],
};
