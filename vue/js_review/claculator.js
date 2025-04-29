const defaultValue = 1;

function add(num1, num2){
  return num1 + num2;
}

function minus(num1, num2){
  return num1 - num2;
}

// commonJS 모듈 (node) 와 ES module (vue) 가 있음.
module.exports = { defaultValue, add, minus };