const fu = require('./fu')
const path = require('path')

const resolve = function(dir) {
    return path.join(__dirname, '..', dir);
}

// 把src下的字体文件拷贝到examples目录下 让file-loader去处理

const examplesFontPath = resolve('examples/fonts')
const srcStyleFontsPath = resolve('src/styles/fonts')

if (!fu.exist(examplesFontPath)) {
    fu.mkdir(examplesFontPath)
}

fu.copy(srcStyleFontsPath, examplesFontPath)