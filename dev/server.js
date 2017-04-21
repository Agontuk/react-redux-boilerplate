const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/dev.conf');
const port = config.devServer.port;

new WebpackDevServer(webpack(config), {
    port: port,
    hot: true,
    stats: {
        children: false,
        chunks: false,
        colors: true,
        errors: true,
        errorDetails: true
    },
    publicPath: config.output.publicPath
}).listen(port, 'localhost', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening at http://localhost:${ port }/`);
});
