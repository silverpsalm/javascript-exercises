const add = function(...toAdd) {
	let sum = 0;
  for (const num of toAdd) {
    sum += num;
  }
  return sum;
};

const subtract = function(...toSubtract) {
  let sum = toSubtract[0];
  for (i = 1;i <= toSubtract.length-1;i++) {
    sum -= toSubtract[i];
  } 
  return sum;
};

const sum = function(toSum) {
  let sum = 0;
  for (const num of toSum) sum += num;
  return sum;
};

const multiply = function(toMultiply) {
  let sum = 1;
  console.log(sum);
  for (i = 0 ; i <= toMultiply.length-1 ; i++) {
    sum *= toMultiply[i];
  } 
  return sum;
  // looks like multiplying array elements gives NaN. Look up array .reduce()
};


const power = function(num1,num2) {

  let power = num1 ** num2;
  return power;
};

const factorial = function(num) {
  // 0 factorial = 1. never below 1.
	let sum = 1;

  if (num >= 1) {
  for (i=1 ; i<=num ; i++) sum *= i;  
}
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
