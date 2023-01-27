const signs = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 || b === 0) {
    return "∞";
  }
  return a / b;
}

function calculateFunction(a, b, sign) {
  if ((a + b).indexOf("∞") !== -1) {
    return "∞";
  }
  a = Number(a);
  b = Number(b);
  return signs[sign](a, b);
}

export default calculateFunction;
