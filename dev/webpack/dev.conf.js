const merge = require('webpack-merge');
const config = require('./base.conf');

module.exports = merge(config, {
    devtool: 'eval',
    devServer: {
        port: 3000
    }
});
