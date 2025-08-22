// kelvin temperature description
const kelvin = 293;
// how to get celsius value
var celsius = kelvin - 273;
// fahrenheit calculation from celsius
var fahrenheit = celsius *(9/5) + 32
// rounded up value for fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
