const display = document.getElementById("display");

display.innerText = "0";

const btnNumber = document.querySelectorAll(".button-number");

const btnClear = document.querySelector(".button-clear");

const btnOperator = document.querySelectorAll(".button-operator");

const btnOperatorEqual = document.querySelector(".button-operator-equal");

const comma = document.getElementById("comma");

const btnPositiveNegative = document.getElementById("btn-positive-negative");

const btnPercent = document.getElementById("btn-percent");

let currentValue = "0";
let previousValue = "";
let currentOperator = "";
let currentOperation = "";
let result = "";

if (currentValue.includes(".")) {
  comma.disabled = true;
}

// Operation Functions

function add(a, b) {
  const numberA = a;
  const numberB = b;

  return numberA + numberB;
}

function substract(a, b) {
  const numberA = a;
  const numberB = b;

  return numberA - numberB;
}

function multiply(a, b) {
  const numberA = a;
  const numberB = b;

  return numberA * numberB;
}

function divide(a, b) {
  const numberA = a;
  const numberB = b;
  return numberA / numberB;
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

// Buttons Listeners
const storeOperator = btnOperator.forEach((btn) => {
  btn.addEventListener("click", handleClickOperator);
});

btnClear.addEventListener("click", handleClickClear);

btnNumber.forEach(function (btn) {
  btn.addEventListener("click", handleClickNumber);
});

btnPositiveNegative.addEventListener("click", handleClickPositiveNegative);

btnPercent.addEventListener("click", handleClickPercent);

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= 0 && key <= 9) {
    // Si la touche est un chiffre (0-9)
    handleClickNumber({ target: { value: key } });
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    // Si la touche est un opérateur
    handleClickOperator({ target: { value: key } });
  } else if (key === "Enter" || key === "=") {
    // Si la touche est "Enter" ou "=" pour effectuer l'opération
    eval();
  } else if (key === ".") {
    // Si la touche est un point (pour les décimaux)
    handleClickNumber({ target: { value: key } });
  } else if (key === "Backspace") {
    // Récupérer le texte actuel du bouton de suppression/clear
    const clearButtonText = document.querySelector(".button-clear").innerText;

    if (clearButtonText === "C") {
      // Si le texte est "C", appeler handleBackspace
      handleBackspace();
    } else if (clearButtonText === "AC") {
      // Si le texte est "AC", appeler handleClickClear
      handleClickClear();
    }
  }
});

function handleBackspace() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
    display.innerText = currentValue;
  } else if (currentOperator) {
    currentOperator;
    display.innerText = currentOperator;
  } else {
    currentValue = "0";
    display.innerText = currentValue;
  }
}

// Button handling functions
function handleClickNumber(event) {
  let valueStr = event.target.value;

  if (currentValue !== 0 && !result) {
    btnClear.innerText = "C";
  }

  comma.addEventListener("click", function () {
    comma.disabled = "true";
  });

  console.log("in handleNumber:", comma.disabled);

  if (currentOperator === "-" && previousValue === "0") {
    currentValue = "-" + valueStr;
    previousValue = "";
  } else if (
    currentValue === "0" ||
    currentValue === "Infinity" ||
    result !== ""
  ) {
    currentValue = valueStr;
  } else if (display.innerText.length < 14) {
    currentValue += valueStr;
  }

  display.innerText = currentValue;

  result = "";
}

function handleClickPositiveNegative() {
  currentValue *= -1;
  display.innerText = currentValue;
}

function handleClickPercent() {
  currentValue /= 100;
  display.innerText = currentValue;
}

function handleClickOperator(event) {
  let valueStr = event.target.value;

  if (previousValue === "") {
    btnOperator.forEach((btn) => (btn.disabled = true));
  }

  previousValue = currentValue;

  currentOperator = valueStr;

  currentValue = "0";
  display.innerText = currentOperator;

  comma.disabled = false;

  console.log("in handleOperator:", comma.disabled);
}

function handleClickClear() {
  currentValue = "0";
  previousValuereviousValue = "";
  currentOperator = "";

  display.innerText = currentValue;
  comma.disabled = false;
  btnOperator.forEach((btn) => (btn.disabled = false));
}

function eval() {
  let a = parseFloat(previousValue);
  let b = parseFloat(currentValue);

  if (isNaN(a)) {
    a = 0;
    currentOperator = "+";
  }

  if (b === 0 && currentOperator === "/") {
    result = "Infinity";
  } else {
    result = operate(a, currentOperator, b);
  }

  if (result.toString().length > 14) {
    display.innerText = result.toPrecision(2);
    currentValue = result.toPrecision(2);
  } else {
    display.innerText = result;
    currentValue = result;
  }

  previousValue = "";
  comma.disabled = false;
  btnOperator.forEach((btn) => (btn.disabled = false));
  btnClear.innerText = "AC";
}

console.log(display.innerText);

btnOperatorEqual.addEventListener("click", eval);
