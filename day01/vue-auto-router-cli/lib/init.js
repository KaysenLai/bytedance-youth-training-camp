// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('./download')
const open = require('open')

const spawn = async (...args) => {
  // 同步 Promise api
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const options = args[args.length -1]
    if(process.platform ==='win32') {
      options.shell = true
    }
    const proc = spawn(...args)

    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

const log = content => console.log(chalk.green(content))

module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('LCK Welcome.')
  log(data)

  // 项目模板
  console.log('Create project', name)
  await clone('su37josephxia/vue-template', name)

  // 下载依赖 npm i 子线程
  log(`Installing dependency...`)
  log(chalk.green(`
  Installing successfully
  cd ${name}
  npm run dev
  `))

  await spawn('npm',["install"],{cwd :`./${name}`})
  open("http://localhost:8080")
  await spawn('npm',['run','serve'],{cwd :`./${name}`})
}
