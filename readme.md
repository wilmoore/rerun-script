# rerun-script

[![Build Status](http://img.shields.io/travis/wilmoore/rerun-script.svg)](https://travis-ci.org/wilmoore/rerun-script) [![NPM version](http://img.shields.io/npm/v/rerun-script.svg)](https://www.npmjs.org/package/rerun-script) [![NPM downloads](http://img.shields.io/npm/dm/rerun-script.svg)](https://www.npmjs.org/package/rerun-script) [![LICENSE](http://img.shields.io/npm/l/rerun-script.svg)](license) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Invoke npm scripts upon file changes. Configure via `package.json` using glob patterns.

    $ npm install rerun-script --save-dev

## usage

    Usage: rerun-script [options]

    Options:

      -h, --help                   output usage information
      -V, --version                output the version number
      -d, --directory [directory]  package directory

## configure package.json

- **NOTE** 1: While the examples below use the [standard] lint checker, you are free to use any lint checker you like.
- **NOTE** 2: The `watch` script in `package.json` is optional and is only necessary if you plan to invoke `rerun-script` via `npm run`. You can use any script name you like.

### `package.json`

###### compact (recommended) format:

    {
        "scripts": {
            "test": "node test.js",
            "lint": "standard",
            "watch": "rerun-script"
        },

        "watches": {
            "test": [ "*.js", "lib/**/*.js", "test/**/*.js" ],
            "lint": [ "*.js", "lib/**/*.js", "test/**/*.js" ]
        }
    }

###### verbose format:

    {
        "scripts": {
            "test": "node test.js",
            "lint": "standard",
            "watch": "rerun-script"
        },

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

If you only have one pattern to match for a script, you can pass in a string instead of an array:


    {
        "scripts": {
            "test": "node test.js",
            "lint": "standard",
            "watch": "rerun-script"
        },

        "watches": {
            "test": "test/**/*.js",
            "lint": "*.js"
        }
    }

## start the watcher

    # directly
    $ ./node_modules/.bin/rerun-script

    # or via `npm run watch`
    $ npm run watch

## screenshot

![](https://cloudup.com/c6iu6nW6gm2+)

## License

  [MIT](license)

[standard]: https://github.com/feross/standard
