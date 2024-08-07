const display = document.getElementById("display");

display.innerText = "0";

const btnNumber = document.querySelectorAll(".button-number");

const btnClear = document.querySelector(".button-clear");

const btnOperator = document.querySelectorAll(".button-operator");

const btnOperatorEqual = document.querySelector(".button-operator-equal");

const comma = document.getElementById("comma");

let currentValue = "0";
let previousValue = "";
let currentOperator = "";
let result = "";

if (currentValue.includes(".")) {
  comma.disabled = true;
}

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

/*function infinity(a,b) {

}*/

function operate(a, operator, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } /*else if (operator === "/" && b === "0") {
    return Infinity(a,b);
  } */ else if (operator === "/") {
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

  comma.addEventListener("click", function () {
    comma.disabled = "true";
  });
  console.log("in handleNumber:", comma.disabled);
  if (currentValue === "0" || currentValue === "Infinity" || result !== "") {
    currentValue = valueStr;
  } else if (display.innerText.length < 14) {
    currentValue += valueStr;
  }

  display.innerText = currentValue;

  result = "";
}

function handleClickOperator(event) {
  let valueStr = event.target.value;

  previousValue = currentValue;
  currentOperator = valueStr;

  currentValue = "0";
  display.innerText = currentOperator;

  /*btnOperator.forEach(function (btn) {
    btn.addEventListener("(click", function () {
      btn.disabled = true;
    });
  });*/

  comma.disabled = false;
  console.log("in handleOperator:", comma.disabled);
}

function handleClickClear() {
  currentValue = "0";
  previousValuereviousValue = "";
  currentOperator = "";
  display.innerText = currentValue;
  comma.disabled = false;
}

//Debut de fonction eval, il faudra trouver un moyen de récuperer les données
//dans le display avant l'operator pour correspondre à "a" et après pour "b"
//Si cela fonctionne, il faudra trouver comment effectuer le calcul.

function ParseFloat(str, val) {
  str = str.toString();
  str = str.slice(0, str.indexOf(".") + val + 1);
  return Number(str);
}

function eval() {
  let a = ParseFloat(previousValue, 2);
  let b = ParseFloat(currentValue, 2);

  if (isNaN(a)) {
    a = 0;
    currentOperator = "+";
  }

  if (b === 0 && currentOperator === "/") {
    result = "Infinity";
  } else {
    result = operate(a, currentOperator, b);
  }

  display.innerText = result.toFixed(2);
  currentValue = result.toFixed(2);
  previousValue = "";
  comma.disabled = false;
}

console.log(display.innerText);

btnOperatorEqual.addEventListener("click", eval);
