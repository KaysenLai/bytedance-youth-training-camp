import "./assets/main.css"
import json5 from "./assets/data.json5"
import lodash from "lodash";

console.log(json5)

function foo() {
  console.log("hello")
}
const div = document.createElement('div')
div.innerText = 'hello world'
div.classList.add('red')

const btn = document.createElement('button')
btn.innerText = 'load user'
btn.onclick = async () => {
  // 异步懒加载 bar
  const bar = await import("./user")
  console.log(bar)
}

const body = document.querySelector('body')
body.appendChild(div)
body.appendChild(btn)

export default foo
