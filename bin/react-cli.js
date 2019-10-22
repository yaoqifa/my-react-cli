#!/usr/bin/env node
process.env.NODE_PATH = __dirname + '/../node_modules'
const { resolve } = require('path')
const resolveCommands = command => resolve(__dirname, '../commands/', command)
const program = require('commander')

program.version(require('../package.json').version)

program.usage('<command>')

program.command('init')
  .option('-f, --foo', 'enable foo')
  .description('creat a new project')
  .alias('i')
  .action(() => {
    require(resolveCommands('init'))
  })

  if (program.args && !program.args.length) {
    program.help()
  }