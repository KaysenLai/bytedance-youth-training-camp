import "./assets/main.css"
function foo() {
  console.log("hello")
}
const div = document.createElement('div')
div.innerText = 'hello world'
div.classList.add('red')
const body = document.querySelector('body')
body.appendChild(div)

export default foo
