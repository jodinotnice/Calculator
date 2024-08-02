function add(a, b) {
  const numberA = a;
  const operator = "+";
  const numberB = b;

  return numberA + operator + numberB;
}

function substract(a, b) {
  const numberA = a;
  const operator = "-";
  const numberB = b;

  return numberA + operator + numberB;
}

function multiply(a, b) {
  const numberA = a;
  const operator = "*";
  const numberB = b;

  return numberA + operator + numberB;
}

function divide(a, b) {
  const numberA = a;
  const operator = "/";
  const numberB = b;

  return numberA + operator + numberB;
}

function operate(a, operator, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

console.log(operate(1, "+", 3));

console.log(operate(1, "-", 3));

console.log(operate(1, "*", 3));

console.log(operate(1, "/", 3));


