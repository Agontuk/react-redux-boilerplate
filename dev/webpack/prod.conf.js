const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./base.conf');
const { plugins } = config;
const SRC_PATH = path.join(__dirname, '..', '..', 'src');

module.exports = merge(config, {
    entry: {
        'app': `${ SRC_PATH }/main`
    },
    plugins: plugins.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false,
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new BundleAnalyzerPlugin()
    ]),
    devtool: 'source-map',
    stats: {
        children: false,
        colors: true,
        errors: true,
        errorDetails: true,
        modules: false,
        maxModules: 0
    }
});
