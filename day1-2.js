//z: mass / 3 -2

const fs = require('fs')
const inputs = fs.readFileSync("input.txt").toString().trim()
let split = inputs.split("\n")

const checkRequirments = (num) => {
    let number = parseInt(num)
    let amount = Math.floor(num /3)-2
    if(amount <= 0) return 0
    console.log("amount:",amount)
    return amount + checkRequirments(amount)
}

let reduce = split.reduce((a,b)=> a + checkRequirments(b), 0)
console.log(reduce)

//4921542


// console.log(checkRequirments(1969))