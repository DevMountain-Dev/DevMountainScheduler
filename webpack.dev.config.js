"use strict";
const webpack = require('webpack');
const jQuery  = new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
});

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:4000/public/',
        filename: 'bundle.js'
    },
    plugins: [
        jQuery,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|build)/,
                loaders: ['react-hot', 'babel']
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
    target: "web"
};