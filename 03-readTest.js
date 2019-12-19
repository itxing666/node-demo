let fs = require('fs')
fs.readFile('./a.txt', function(error, data) {
  if (error) {
    console.log('=============读取失败', error)
  } else {
    console.log('=============读取成功', data.toString())
  }
})
