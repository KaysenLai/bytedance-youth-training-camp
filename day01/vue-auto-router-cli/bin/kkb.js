#!/usr/bin/env node
// npm i commander download-git-repo ora handlebars figlet clear chalk open -s
const program = require('commander')


program.version(require('../package.json').version)
program.command('init <name>').description('init project').action(name => {
  require('../lib/init')(name)
})
program.parse(process.argv)
