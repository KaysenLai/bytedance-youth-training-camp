#### 主要流程

1. 创建文件夹
2. 创建`index.js`
3. 创建`Package.json`
4. 安装依赖

#### 开发思想

小步骤开发：先实现最基本的功能，再慢慢完善或者拆分代码

从问题出发：解决小问题，不断优化

#### Rollup

webpack  => esm => require(自定义，动态的)，静态的时候分析不出来

天然支持esm，esm => 静态 ast

能静态分析代码信息，生成依赖图

1. index.js 依赖于foo
2. foo.js 依赖于 {}

得到对应的代码信息 => 数据结构=>导出生成代码

没使用的代码不会打包进去，检测全局作用域， tree-shaking

造轮子适合用rollup，代码体积量最小

开发适合用webpack，对开发的优化比较高

#### Vite

浏览器原生的引入，引入`vue`，相对路径，`style.css`等理解不了