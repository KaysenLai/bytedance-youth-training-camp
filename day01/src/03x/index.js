const http = require('http')

const session = {}
http.createServer((req, res) => {
  console.log('cookie', req.headers.cookie)
  res.setHeader('Set-cookie', 'abc=123')
  res.end('Hello')
}).listen(3000)
