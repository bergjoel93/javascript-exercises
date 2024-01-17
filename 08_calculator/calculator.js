const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	if(arr.length===0) return sum;
  for(let i = 0; i < arr.length; i++){
    sum = sum+arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
	if(arr.length===0) return 0;
  for(let i = 0; i < arr.length; i++){
    mult = mult*arr[i];
  }
  return mult;
};

const power = function(num1, num2) {
	let pow = 1;
  for(let i = num2; i > 0; i--){
    pow = pow*num1;
  }
  return pow;
};

const factorial = function(num) {
  let fact = 1;
  if(num===0) return fact;
  for(let i = num; i > 0; i--){
    fact = fact * i;
  }
  return fact;
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
