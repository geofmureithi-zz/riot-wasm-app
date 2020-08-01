const path = require('path')
const cac = require('cac')
const sao = require('sao')
const update = require('update-notifier')
const pkg = require('./package')

const cli = require('cac')()
 
cli.option('--lang [type]', 'Choose wasm language', {
  default: 'rust'
})

cli
  .command('new [project]', 'Create a project')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    console.log(folder, options);
})

cli
  .command('scaffold [project]', 'Scarfold a custom project')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    console.log(folder, options);
})


cli
  .command('serve ', 'Serve a directory')
  .action((dir) => {
    console.log(dir);
})

cli
  .command('build', 'Build current directory')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    console.log(folder, options);
})

cli.help()
cli.version(pkg.version)
cli.parse()

update({
  pkg
}).notify()