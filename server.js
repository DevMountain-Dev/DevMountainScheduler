const express = require('express');
const webpack = require('webpack');
const path    = require('path');
// var bodyParser = require('body-parser');
// var cors = require('cors');


const app = express();

// app.use(bodyParser.json())
// app.use(cors(corsOptions))
switch (process.env.npm_lifecycle_event) {
    case 'build':

        break;
    case 'start':
        const webpackDevMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');
        const config               = require('./webpack.dev.config');
        const compiler             = webpack(config);
        app.use(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath
        }));
        app.use(webpackHotMiddleware(compiler, {
            log: console.log
        }));
        app.get('/', (req, res, next) => res.sendFile(path.join(__dirname + '/src/index.html')));
        break;
    default:
        app.use(express.static(__dirname + '/public'));
}


//
// var corsOptions = {
//   origin: 'http://localhost:4000'
// }


app.listen(4000, function () {
    console.log('Listening on port ' + 4000);
});
