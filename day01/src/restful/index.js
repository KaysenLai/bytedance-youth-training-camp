const Koa = require('koa')

const app = new Koa()

const config = require('./conf')
// 注册路由
const { loadModel } = require('./framework/loader')
loadModel(config)(app)

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful = require('./framework/router')
app.use(restful)

// 动态编程，1）根据模型自动加载 2）自动产生路由
app.listen(3000, () => {
  console.log('Server listen on 3000')
})
