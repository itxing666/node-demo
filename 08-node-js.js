// 没有DOM BOM
// 提供了很多核心模块 如 fs http path os
// 如果要是用模块就需要require

let os = require('os')

console.log(os.totalmem())

// node中没有全局作用域，只有模块作用域(a模块的方法b模块是不能用的)
// 后缀名可省略.js,相应的/不能省略，如果省略就会认为是核心模块
// require两个方法 1.导入文件 2.拿到模块文件的接口对象 默认空对象{}

