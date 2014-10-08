# watch-and-run

[![Build Status](http://img.shields.io/travis/wilmoore/watch-and-run.svg)](https://travis-ci.org/wilmoore/watch-and-run) [![NPM version](http://img.shields.io/npm/v/watch-and-run.svg)](https://www.npmjs.org/package/watch-and-run) [![NPM downloads](http://img.shields.io/npm/dm/watch-and-run.svg)](https://www.npmjs.org/package/watch-and-run) [![LICENSE](http://img.shields.io/npm/l/watch-and-run.svg)](LICENSE)

> Via package.json, configure glob patterns to watch and invoke an `npm run` script on change.

![](https://cloudup.com/cJYbv0puHkE+)

    $ npm install watch-and-run --save-dev

## package.json configuration

###### watches

    {
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

## starting the watcher

###### via npm run script

    {
      "scripts": {
        "watch": "watch-and-run",
        "test": "tape test.js | faucet",
        "lint": "eslint"
      }
    }

```shell
% npm run watch
```

###### directly

    % ./node_modules/.bin/watch-and-run

## License

  [MIT](LICENSE)

