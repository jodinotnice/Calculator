const display = document.getElementById("display");

display.innerText = "0";

const btnNumber = document.querySelectorAll(".button-number");

const btnClear = document.querySelector(".button-clear");

const btnOperator = document.querySelectorAll(".button-operator");

const btnOperatorEqual = document.querySelector(".button-operator-equal");

let currentValue = "0";
let previousValue = "";
let currentOperator = "";

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

const storeOperator = btnOperator.forEach((btn) => {
  btn.addEventListener("click", handleClickOperator);
});

btnClear.addEventListener("click", handleClickClear);

btnNumber.forEach(function (btn) {
  btn.addEventListener("click", handleClickNumber);
});

//Je veux changer le texte du bouton AC en C une fois un chiffre cliqué.
//On va se contenté de ça pour le moment
/*
function clearChange() {
  if (display.innerText === "0") {
    return (btnClear.innerText = "AC");
  } else btnClear.innerText = "C";
}
*/

function handleClickNumber(event) {
  let valueStr = event.target.value;

  if (currentValue === "0" || currentValue === 0) {
    currentValue = valueStr;
  } else if (display.innerText.length < 14) {
    currentValue += valueStr;
  }

  display.innerText = currentValue;
}

function handleClickOperator(event) {
  let valueStr = event.target.value;

  previousValue = currentValue;
  currentOperator = valueStr;

  currentValue = "0";
  display.innerText = currentOperator;
}

function handleClickClear() {
  currentValue = "0";
  previousValuereviousValue = "";
  currentOperator = "";
  display.innerText = currentValue;
}

console.log();
//Debut de fonction eval, il faudra trouver un moyen de récuperer les données
//dans le display avant l'operator pour correspondre à "a" et après pour "b"
//Si cela fonctionne, il faudra trouver comment effectuer le calcul.

function eval() {
  let a = parseFloat(previousValue);
  let b = parseFloat(currentValue);

  if (isNaN(a)) {
    a = 0;
    currentOperator = "+";
  } else if (b === 0) {
    b = a;
  }
  let result = operate(a, currentOperator, b);

  console.log(currentValue, previousValue, result, a, b);

  display.innerText = result;
  currentValue = result;
  previousValue = "";
}

console.log(display.innerText);

btnOperatorEqual.addEventListener("click", eval);
