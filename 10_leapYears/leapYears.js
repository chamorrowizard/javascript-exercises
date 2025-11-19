const leapYears = function(year) {
const byFour = year % 4 === 0;
const byHundred = year % 100 === 0;
const byFourHundred = year % 400 === 0;

if (byFour && (!byHundred || byFourHundred)){
  return "true";
} else {
    return "false";
}
};
console.log(leapYears(2000));
//leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false
// Do not edit below this line
module.exports = leapYears;
