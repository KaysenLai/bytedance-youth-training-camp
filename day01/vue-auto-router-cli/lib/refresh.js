// 读文件列表

// 拼代码 模板渲染的方式
const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')

module.exports = async () => {
  // 获取列表
  const list = fs.readdirSync('./src/views').filter(v => v!=='Home.vue')
    .map(v=>({
      name: v.replace('.vue', ''),
      file: v
    }))

  // 生成路由定义
  compile({list}, './src/router.js', './template/router.js')

  // 生成菜单
  compile({list}, './src/App.vue', './template/App.vue.hbs')

  /*
   *
   */
  function compile(meta, filePath, templatePath) {
    if(fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString()
      const result = handlebars.compile(content)(meta)
      fs.writeFileSync(filePath,result)
      console.log(chalk.green(`${filePath} Creat successfully`))
    }
  }
}
