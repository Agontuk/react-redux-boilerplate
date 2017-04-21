const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = require('./base.conf');
const { plugins } = config;
const PORT = 3000;
const SRC_PATH = path.join(__dirname, '..', '..', 'src');

module.exports = merge(config, {
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${ PORT }`,
        'webpack/hot/only-dev-server',
        `${ SRC_PATH }/main`
    ],
    plugins: plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new DashboardPlugin()
    ]),
    devtool: 'eval-source-map',
    devServer: {
        port: PORT
    }
});
