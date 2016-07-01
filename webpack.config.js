"use strict";

const path = require('path');

module.exports = {
    entry: {
        mocachino: './src/index.js',
        mocachino_worker: './src/demo.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    externals: [{
        'workerjs': true,
        'ws': true,
		'path': true
    }],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: [/node_modules/] }
        ]
    }
};
