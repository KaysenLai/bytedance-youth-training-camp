console.log("main")
import {createApp} from "vue";

// node_modules
// esbuild => go => 打包速度很快
// esbuild => 一个文件  =>  只返回一个 文件 浏览器就能理解了

// lodash-es => 有n个import => http请求过多了，浏览器吃不消
// lodash-es 有n个import => 使用 esbuild 变成一个 Import
