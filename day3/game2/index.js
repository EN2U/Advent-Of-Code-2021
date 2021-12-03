import fs from 'fs'

function bitOnIndex(index, array, type) {
  let cont = 0
  let x = []

  array.forEach(val => {
    if ([...val][index] === "1") cont++
    else cont--
  })
  array.forEach(val => {
    if (type === "oxygen") {
      if (cont < 0 && [...val][index] === "0") x.push(val)
      else if (cont > 0 && [...val][index] === "1") x.push(val)
      else if (cont === 0 && [...val][index] === "1") x.push(val)
    } else {
      if (cont < 0 && [...val][index] === "1") x.push(val)
      else if (cont > 0 && [...val][index] === "0") x.push(val)
      else if (cont === 0 && [...val][index] === "0") x.push(val)
    }
  })
  return x
}

let arr = fs.readFileSync('input.txt').toString().split("\n")

let accOfNumbers = arr
let accOfNumbers2 = arr

let cont = 0
while (true) {
  if (accOfNumbers2.length !== 1) accOfNumbers2 = bitOnIndex(cont,accOfNumbers2, "co2")
  if (accOfNumbers.length !== 1) accOfNumbers = bitOnIndex(cont, accOfNumbers, "oxygen")
  if (accOfNumbers.length === 1 && accOfNumbers2.length === 1) break
  cont++
}

console.log(accOfNumbers, accOfNumbers2)