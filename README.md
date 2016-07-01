# Testing Webpack isomorphic applications

So we've rolled out a UMD wrapped isomorphic application which will run in node and in the browser.  We're not done yet,
any reasonably sized project will want to introduce testing to ensure we avoid [regression](https://en.wikipedia.org/wiki/Regression_testing).

Lets start with the simplest case using [Karma](https://karma-runner.github.io/1.0/index.html) test runner.  You'll want to go grab the [sample project](https://github.com/blakef/webpack-isomorphic-testing.git)

## Karma

Install karma and a couple of dependencies:

```bash
$ npm i mocha
$ npm i karma karma-webpack karma-mocha karma-mocha-reporter karma-source-map-support karma-sourcemap-loader karma-phantomjs2-launcher
```

Great, lets splash together a config to get karma rolling:

```javascript
const webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS2'],
        frameworks: ['mocha', 'source-map-support'],
        reporters: ['mocha'],
        client: { chai: { includeStack: true } },

        files: [ 'test/unit/**/*.test.js' ],
        exclude: [ 'node_modules/' ],

        preprocessors: {
            'src/index.js': ['webpack', 'sourcemap'],
            'test/**/*.js': ['webpack', 'sourcemap']
        },

        webpack: Object.assign(webpackConfig, {
            devtool: 'inline-source-map',
            plugins: []
        }),

        port: 9876, colors: true, logLevel: config.LOG_INFO, autoWatch: true, singleRun: false
    });
};
```

Right, so we're ready to get rolling... but we'll need to write some tests quickly to roll.

## Tests

We have two tests: `simple.test.js` (which is not so simple) and `foo.test.js`, which tests one of our shims.

### foo.test.js

Importing one of our shims, we open up

__WIP__
