const convertToCelsius = function(num) {
 const convertF = (num - 32)/1.8;
  return Math.round((convertF + Number.EPSILON) * 100) /100;
};
console.log(convertToCelsius(110));

const convertToFahrenheit = function(num) {
 const covertC = (num * 1.8) +32;
  return Math.round((convertC + Number.EPSILON) * 100) /100;
};
console.log(convertToCelsius(18));

//C = F - 32) / 1.8
//F = (C*1.8) +32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
