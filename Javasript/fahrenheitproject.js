//Forecast is 293 Kelvin
const kelvin = 293

//Converting Kelvin to Celsius
const celsius = kelvin - 273

//Converting Celsius to Fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32)

//Printing out the degrees
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)