# rerun-script

[![Build Status](http://img.shields.io/travis/wilmoore/rerun-script.svg)](https://travis-ci.org/wilmoore/rerun-script) [![NPM version](http://img.shields.io/npm/v/rerun-script.svg)](https://www.npmjs.org/package/rerun-script) [![NPM downloads](http://img.shields.io/npm/dm/rerun-script.svg)](https://www.npmjs.org/package/rerun-script) [![LICENSE](http://img.shields.io/npm/l/rerun-script.svg)](license)

> Invoke npm scripts upon file changes. Configure via package.json using glob patterns.

    $ npm install rerun-script --save-dev

## usage

    Usage: rerun-script [options]

    Options:

      -h, --help                   output usage information
      -V, --version                output the version number
      -d, --directory [directory]  package directory

## example

    % ./node_modules/.bin/rerun-script

## package.json

    {
      "test": "tape test.js | faucet",
      "lint": "eslint",

      "watches": [
        {
          "script": "test",
          "patterns": [ "*.js", "lib/**/*.js", "test/**/*.js" ]
        },
        {
          "script": "lint",
          "patterns": [ "*.js", "lib/**/*.js", "test/**/*.js" ]
        }
      ]
    }

## screenshot

![](https://cloudup.com/cJYbv0puHkE+)

## License

  [MIT](license)

