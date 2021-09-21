import fs from "fs";
import createPackageTemplate from "./createPackageTemplate.js";


// // 1. 创建项目文件夹
fs.mkdirSync(getRootPath());

// 2. 创建 index.js
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));
// 3. 创建 package.json
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  createPackageTemplate(config)
);

// 4. 安装依赖

function getRootPath() {
  return "./haha"
}
