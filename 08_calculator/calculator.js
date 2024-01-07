const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(args) {
  if(args.length==0){return 0}
  let result = new Number(0);
  for (i=0;i<args.length;i++){
    result += Number(args[i])
  }
  return result;
	
};

const multiply = function(args) {
  let result = 1;
  for (i=0;i<args.length;i++){
    result = result * args[i]
  }
  return result;

};

const power = function(a,b) {
  let result = 1;
  for(i=0;i<b;i++){
    result = result*a
  }
  return result
};

const factorial = function(a) {
  if(a==0){return 1}
	let result = 1;
  for(i=1;i<=a;i++){
    result= result * i
  }
  return result
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
