// 图片切割 合并 js 处理不了 视频压缩 调个底层硬件 Pos 动态链接库
// js无法操作二进制，借用C语言操作

const buf1 = Buffer.alloc(10)
console.log(buf1)
// 代表分配了10个字节，存储用二进制，一般显示成16进制
// <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.from('a')
console.log(buf2) // <Buffer 61> 16进制的Ascii值

const buf3 = Buffer.from('中')
console.log(buf3) // <Buffer e4 b8 ad>使用了3个字节，utf-8编码

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString()) // <Buffer 61 e4 b8 ad> a中 连接buffer
