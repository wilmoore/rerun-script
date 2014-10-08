#!/usr/bin/env node
'use strict';

var program = require('commander');
var version = require('program-version');
var watcher = require('watch-glob');
var shell = require('shelljs');
var path = require('path');
var chalk = require('chalk');
var debug = require('debug')('watch-and-run:cli');
var getWatches = require('../');

// version.

program.version(version());

// options.

program.option('-d, --directory [directory]', 'Package Directory');

// parse options.

program.parse(process.argv);
debug('directory: %s', program.directory);

// get watches.

var watches = getWatches(program.directory);

// validate watches.

if (!watches.length) {
   console.error('No valid watches defined...aborting!');
   exit(1);
}

shell.echo(chalk.cyan("\n... Starting File Watcher ..."))
shell.echo("");

// add watches.

watches.forEach(function (watch) {
  debug('current watch: %s', JSON.stringify(watch));

  if (!watch.script) {
    shell.echo(chalk.red("Watch defined without script"));
  }

  shell.echo(chalk.cyan("Watching Pattern: " + watch.patterns));
  shell.echo(chalk.cyan("Using npm script: " + watch.script));
  shell.echo("");

  watcher(watch.patterns, function() {
    shell.exec('npm run ' + watch.script);
  });
});

shell.echo(chalk.cyan("... To quit, enter CTRL+C  ..."));
shell.echo("");
