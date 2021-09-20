const fs = require('fs')

const rs = fs.createReadStream('./image1.jpg')
const ws = fs.createWriteStream('./image2.jpg')
// Stream，一个很大文件很难传过去，想象成利用水管传输
// 01.jpg ReadStream => pipe => WriteStream 02.jpg
rs.pipe(ws)
