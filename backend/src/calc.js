function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// BUG: does not guard against division by zero — returns Infinity instead of throwing.
function divide(a, b) {
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
