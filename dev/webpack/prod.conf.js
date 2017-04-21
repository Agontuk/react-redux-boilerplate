const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./base.conf');
const { plugins } = config;

module.exports = merge(config, {
    entry: {
        'app': `${ config.context }/main`
    },
    plugins: plugins.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true
            },
            comments: false,
            sourceMap: false
        }),
        new BundleAnalyzerPlugin()
    ])
});
