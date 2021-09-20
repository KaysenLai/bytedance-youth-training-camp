const fs = require('fs')
const http = require('http')
http.createServer((request, response) => {
  // console.log('A request', getPrototypeChain(response))
  // response.end("request")

  const {url, method ,headers} = request
  if (url === '/main.css') {

    fs.readFile('main.css', (err, data) => {
      if(err) {
        response.writeHead(500, {"Content-Type": "text/css"})
        response.end(('500 css文件没找到'))
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type',"text/css")
      response.end(data)
    })
    return
  }

  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        response.writeHead(500, {'Content-Type':'text/plain;charset=utf-8'})
        response.end(('500 服务器挂了'))
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type','text/html')
      response.end(data)

    })
  }else if(url === '/users' && method === 'POST') {
    response.writeHead(200, {'Content-Type': 'text/json'})
    response.end({name: "Chaokai"})

  } else if(method === 'GET'&& headers.accept.indexOf('image/*') !== -1) {
    // 所有的图片，直接用readFile读取占内存太大
    // stream 流 /image1.jpg  => ./image1.jpg
    const rs = fs.createReadStream('.' + 'image1.jpg')

  } else {
    response.statusCode = 400
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end(('400 页面未找到'))
  }


}).listen(3000, () => {
  console.log("listen on 3000")
})

function getPrototypeChain(obj) {
  const protoChain = []
  while(obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain
}
