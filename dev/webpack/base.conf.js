const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '..', '..');

module.exports = {
    output: {
        path: `${ ROOT_PATH }/build/`,
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: [
                    `${ ROOT_PATH }/src/`
                ],
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    `${ ROOT_PATH }/src/`
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${ ROOT_PATH }/index.html`
        })
    ]
};
