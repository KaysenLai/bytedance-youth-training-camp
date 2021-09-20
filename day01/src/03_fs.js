const fs = require('fs')


//同步读取
//
//读取的文件是buffer，Nodejs不能读取二进制
// const data = fs.readFileSync('./conf.js')
// console.log('data', data.toString())

//异步IO
// fs.readFile('./conf.js', (err,data) => {
//   // 错误优先的回调
//   if (err) throw err;
//   console.log(data.toString())
// })

const {promisify} = require('util');
(async () => {
  const readFile = promisify(fs.readFile)
  const data = await readFile('./conf.js')
  console.log(data.toString())
})()
