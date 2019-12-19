let http = require('http')
let server = http.createServer()
server.on('request', function(req, res) {
  console.log('============',req.url)
  // 根据不同的响应路径获取获取不同的结果 /开头的
  console.log('=======请求我的端口号', req.socket.remoteAddress, req.socket.remotePort)
  const url = req.url
  if (url === '/') {
    res.end('index page')
  } else if (url === '/login') {
    res.end('login page')
  } else {
    const response = [
      {
        name: 'name',
        age: 'age'
      }
    ]
    res.end(JSON.stringify(response))
  }
})

server.listen(3000, function() {
  console.log('服务器启动成功,可以访问http://localhost:3000/')
})