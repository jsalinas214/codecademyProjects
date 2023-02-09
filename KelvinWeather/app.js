
// a constant kelvin is 293
const kelvin = 293;

// celsius is 273 less than kelvin
const celsius = kelvin - 273;

// fahrenheit calculated using celsius
let fahrenheit = celsius * (9 / 5) + 32;

// flooring our fahrernheit decimal.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Fahrenheit.`)