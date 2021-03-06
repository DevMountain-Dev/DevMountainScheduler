const webpack = require('webpack');
const path    = require('path');
const jQuery  = new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
});

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    devTool: 'eval-source-map',
    plugins: [jQuery],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|build)/,
                loader: 'babel'
            },
            {
                test: /\.css|\.less/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.woff2$|\.woff$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: "file"
            },
            {
                test: /\.json$/,
                loader: "json-loader"

            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ["", '.js', '.jsx', '.css', '.scss', '.json', '.jpg', '.jpeg']
    },
};
