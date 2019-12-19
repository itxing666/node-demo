let fs = require('fs')
fs.writeFile('./test.txt', 'writeTest', function(error) {
  if (error) {
    console.log('===============写入失败')
    return
  }
  console.log('===============写入成功')
})
