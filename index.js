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

const display = document.getElementById("display");

const btn = document.querySelectorAll(".button-number");

console.log(btn);

btn.forEach(function (btn) {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  let valueStr = event.target.value;

  if (display.innerText === "0") {
    display.innerText = valueStr;
  } else {
    display.innerText += valueStr;
  }
}
