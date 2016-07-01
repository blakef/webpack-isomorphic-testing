"use strict";

const path = require('path');
const glob = require('glob');

const config = require('./webpack.config.js');

var foo;
module.exports = foo = Object.assign(config, {
    target: 'node',
    entry: {
        test: glob.sync('./test/**/*.test.js').map(test => `mocha!${test}`)
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs'
    }
});

console.log(foo.entry.test);

