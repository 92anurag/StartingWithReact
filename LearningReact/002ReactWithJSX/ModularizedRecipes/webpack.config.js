/*jshint esversion: 6 */
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: `${BUILD_DIR}/assets`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader?presets[]=env,presets[]=stage-0,presets[]=react'],
            }
        ]
    }
};