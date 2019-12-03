//z: fuel required = (mass / 3 )- 2

const fs = require('fs')
const inputs = fs.readFileSync("input.txt").toString().trim()
let split = inputs.split("\n")
console.log(split)
//
let reduce = split.reduce((a,b)=> a + Math.floor(Number(b)/3)-2,0);
console.log(reduce)

//3282935