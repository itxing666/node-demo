let http = require('http')
let server = http.createServer()

server.on('request', function(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  // res.end('哈哈')

  const url = req.url
  if (url === '/plain') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello 世界')
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<p>hello 世界</p>')

  }
})

server.listen(3000, function() {
  console.log('服务器启动成功,可以访问http://localhost:3000/')
})