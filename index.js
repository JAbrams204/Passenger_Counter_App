
let count = 0
let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")

function  increment() {
  count += 1
  countElement.innerText = count
  // console.log(count)
}

function save() {
  let savedCount = count + " - "
  saveElement.textContent += savedCount
  // saveElement.textContent = saveElement.textContent + savedCount
  countElement.innerText = 0
  count = 0
}
