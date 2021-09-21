const Koa = require("koa");
const fs = require('fs')
const path = require('path')
const Router = require("koa-router");

const serve = require("koa-static");

const views = require("koa-views");

const body = require("koa-body");

const app = new Koa();

app.use(serve(__dirname + "/static"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

app.use(
  body({
    multipart: true,
  })
);

// const router = new Router();
// router.get("/", (ctx) => {
//   ctx.body = "hello hei";
// });
// app.use(router.routes());
app.use((ctx) => {
  const url = ctx.request.url
  console.log(url)
  if(url === '/') {
    ctx.body = fs.readFileSync("./index.html", 'utf-8')
  } else if(url.endsWith('.js')) {
    console.log(url.slice(1))
    // 找到的对应的路径去加载，然后给浏览器
    const p = path.resolve(__dirname, url.slice(1))
    ctx.body = fs.readFileSync(p, 'utf-8')
    ctx.type = 'text/javascript'
    // 做一个标识，如果是Import * form "vue" => node_modules
  }
})

app.listen(8000, () => {
  console.log("open server localhost:8000");
});
