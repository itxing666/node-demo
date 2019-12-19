let http = require('http')
let server = http.createServer()
server.on('request', function(req, res) {
  console.log('============',req.url)
  res.write('<h1>h1</h1>')
  // write 可以写多次 最后要有end
  res.end('hello')
})

server.listen(3000, function() {
  console.log('服务器启动成功,可以访问http://localhost:3000/')
})