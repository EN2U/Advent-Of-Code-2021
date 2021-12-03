import fs from 'fs'

function accArray(array) {
  return array.reduce((pv, cv) => { return pv + cv; }, 0)
}


let arr = fs.readFileSync('file.txt').toString().split("\n").map(item => {
  return parseInt(item, 10)
})


let lastItem = arr.slice(0, 3)
let cont = 0
arr = arr.slice(3, arr.length)
let lastAcc = accArray(lastItem)

arr.forEach( val => {
  lastItem.shift()
  lastItem.push(val)
  let actualAcc = accArray(lastItem)
  if (lastAcc < actualAcc) {
    cont++
  }
  lastAcc = actualAcc
})
console.log(cont)
