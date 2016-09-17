const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        preLoaders: [
            { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            actions: `${ APP_PATH }/actions`,
            components: `${ APP_PATH }/components`,
            containers: `${ APP_PATH }/containers`,
            reducers: `${ APP_PATH }/reducers`
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${ ROOT_PATH }/index.html`
        })
    ],
    devServer: {
        port: 3000
    }
};
