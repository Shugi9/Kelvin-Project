// The forecast is 293 Kelvin and will stay constant
const kelvin='293';
// const kelvin = 0
// Kelvin less 273 is equal to Celsius
var celsius=(kelvin - 273);
// Farenheit is equal to Celsius times nine fifths plus 32
var farenheit = (Math.floor(celsius *(9/5) + 32));
// to display the temperature in farenheit in the console log
console.log("the temperature is" + " "+ farenheit + " " + "degrees Fahrenheit")


