const kelvin = 317; // value in K stays constant
let celsius = kelvin - 273; // convert Kelvin to Celsius
console.log(`The temperature is ${celsius} degrees Celsius.`);

let farenheit = celsius * (9 / 5) + 32; // convert Celsius to Fahrenheit
farenheit = Math.floor(farenheit); // round down the Fahrenheit temperature
console.log(`The temperature is ${farenheit} degrees Farenheit.`);

let newton = celsius * (33 / 1) + 32; // convert Celsius to Fahrenheit
newton = Math.floor(newton); // round down the Fahrenheit temperature
console.log(`The temperature is ${newton} degrees Newton.`);