const convertToCelsius = function(fTemp) {
  let x = fTemp;
  let celsius = (x-32) * (5/9);
  return +celsius.toFixed(1);

};

const convertToFahrenheit = function(cTemp) {
  let x = cTemp;
  let fahrenheit = x * (9/5) + 32;
  let roundedF = Math.round(fahrenheit * 100) / 100;
  return +roundedF.toFixed(1);

};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
