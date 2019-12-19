let http = require('http')
let server = http.createServer()
server.on('request', function() {
  console.log('============已经请求服务')
})

server.listen(3000, function() {
  console.log('服务器启动成功,可以访问http://localhost:3000/')
})