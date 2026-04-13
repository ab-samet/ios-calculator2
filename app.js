let currentValue = "";
let previousValue = "";
let operator = "";
const display = document.querySelector(".display");

document.querySelector(".buttons").addEventListener("click", function (e) {
  const target = e.target;

  if (!target.classList.contains("btn")) return;

  if (!isNaN(target.textContent)) {
    if (currentValue === "0") {
      currentValue = target.textContent;
    } else {
      currentValue += target.textContent;
    }
  }
  if (target.classList.contains("plus")) {
    if (previousValue !== "" && currentValue !== "") {
      calculate();
    }
    previousValue = currentValue;
    operator = "+";
    currentValue = "";
  }
  if (target.classList.contains("substraction")) {
    if (previousValue !== "" && currentValue !== "") {
      calculate();
    }
    previousValue = currentValue;
    operator = "-";
    currentValue = "";
  }
  if (target.classList.contains("multiple")) {
    if (previousValue !== "" && currentValue !== "") {
      calculate();
    }
    previousValue = currentValue;
    operator = "*";
    currentValue = "";
  }

  if (target.classList.contains("division")) {
    if (previousValue !== "" && currentValue !== "") {
      calculate();
    }
    previousValue = currentValue;
    operator = "/";
    currentValue = "";
  }
  function calculate() {
    let prev = Number(previousValue);
    let current = Number(currentValue);
    let result;

    if (operator === "+") result = prev + current;
    if (operator === "-") result = prev - current;
    if (operator === "*") result = prev * current;
    if (operator === "/") result = prev / current;

    currentValue = result.toString();
    previousValue = "";
    operator = "";
    console.log("sonuç", currentValue);
  }
  if (target.classList.contains("ac")) {
    currentValue = "";
    previousValue = "";
    operator = "";
    display.textContent = currentValue;
  }

  if (target.classList.contains("decimal")) {
    if (!currentValue.includes(".")) {
      if (currentValue === "") {
        currentValue = "0.";
      } else {
        currentValue += ".";
      }
    }
  }

  if (target.classList.contains("percent")) {
    currentValue = (Number(currentValue) / 100).toString();
  }

  if (target.classList.contains("pm")) {
    if (currentValue !== "") {
      currentValue = Number(currentValue * -1).toString();
    }
  }

  if (target.classList.contains("equal")) {
    calculate();
  }

  display.textContent = currentValue;
});
