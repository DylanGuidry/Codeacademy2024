//To make a log of a number between 0 - 100, do this

console.log(Math.random() * 100)

//Math.floor() will round to the nearest number

console.log(Math.floor(Math.random() * 100))

//This will round to the neareast number

console.log(Math.ceil(43.8));

//Check if this is a number

console.log(Number.isInteger(2017));

//Use += or -= to add and subtract to a existing variable

let levelUp = 10
console.log(levelUp)
levelUp += 10
console.log(levelUp)

//Incrementing & Decrementing

let a = 10 
a++ 
console.log(a)

let b = 20
b--
console.log(b)

//String Concatenation

let show = 'Adventure Time'

console.log('My favorite show is ' + show + '. ')

//String Interpolation (Template Literals)

const name = 'Dylan'
const favoriteCity = 'El Paso,TX'

console.log(`My name is ${name}. My favorite city is ${favoriteCity}.`)

//Typeof Operator

let newVariable = 'Playing around with typeof.'
let newNumber = 8

console.log(typeof newVariable)
console.log(typeof newNumber)