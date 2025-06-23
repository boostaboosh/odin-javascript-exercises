const add = function(addend1, addend2) {
  return addend1 + addend2
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend
};

const sum = function(numArray) {
	return numArray.reduce((sum, number) => sum += number, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((product, num) => product *= num, 1)
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
	if (num <= 1) return 1
  else{
    return factorial(num - 1) * num
  }
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
