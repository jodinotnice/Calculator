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

const display = document.getElementById("display");

const btnNumber = document.querySelectorAll(".button-number");

const btnClear = document.querySelector(".button-clear");

const btnOperator = document.querySelectorAll(".button-operator");

const btnOperatorEqual = document.querySelector(".button-operator-equal");

const storeOperator = btnOperator.forEach((btn) => {
  btn.addEventListener("click", handleClickOperator);
});

btnClear.addEventListener("click", handleClickClear);

const storeNumber = btnNumber.forEach(function (btn) {
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

function handleClickOperator(event) {
  let valueStr = event.target.value;

  display.innerText += valueStr;
}

function handleClickClear() {
  if (display.innerText !== "0") {
    return (display.innerText = "0");
  } else {
    return (display.innerText = "0");
  }
}

function handleClickNumber(event) {
  let valueStr = event.target.value;

  if (display.innerText === "0") {
    display.innerText = valueStr;
  } else {
    display.innerText += valueStr;
  }
}

//Debut de fonction eval, il faudra trouver un moyen de récuperer les données
//dans le display avant l'operator pour correspondre à "a" et après pour "b"
//Si cela fonctionne, il faudra trouver comment effectuer le calcul.
function eval(a, operator, b) {
  return operate(a, operator, b);
}

eval(1, "-", 6);

function test(number) {
  console.log(`${number}`);
}

function testDeTest(string) {
  test(string);
  console.log(`${string}`);
}

testDeTest("string");
