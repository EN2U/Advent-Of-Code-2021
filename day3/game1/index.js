import fs from 'fs'

let arr = fs.readFileSync('input.txt').toString().split("\n")


let accOfNumbers = new Array([...arr[0]].length).fill(0)

let cont = 0
let index = [...arr[0]].length - 1

arr.forEach(val => [...val].forEach((num, index) => num === "1" ? accOfNumbers[index]++ : accOfNumbers[index]--))
accOfNumbers.forEach(val => val < 0 ? cont += 2**index-- : index--)
console.log(cont * ((2 ** [...arr[0]].length)-1 - cont))
