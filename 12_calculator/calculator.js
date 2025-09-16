const add = function(...numbers) {
  let total = 0;

  for (const number of numbers){
    total += number;
  }

  return total;
};

const subtract = function(...numbers) {
  let total = 0;

  for (const number of numbers){
    if (total === 0){
      total = number;
    } else{
      total -= number;
    }
  }

  return total;
};

const sum = function(array) {
	return array.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(array) {
  return array.reduce((acc, cur) => acc * cur);
};

const power = function(...numbers) {
  return numbers[0] ** numbers [1];
};

const factorial = function(number) {
	let total = 1;

  if(number === 0){
    return 1;
  } else {
    for (i = 1; i <= number; i++){
      total *= i;
    }
  }

  return total;
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
