let firstNumber = "";
let secondNumber = "";
let operator = "";

function updateDisplay() {

    let display = firstNumber;

    if (operator !== "") {
        display += " " + getOperatorSymbol(operator);
    }

    if (secondNumber !== "") {
        display += " " + secondNumber;
    }

    if (display === "") {
        display = "0";
    }

    document.getElementById("display").textContent = display;
}

function getOperatorSymbol(operator) {

    if (operator === "*") {
        return "×";
    }

    if (operator === "/") {
        return "÷";
    }

    return operator;
}

function appendValue(value) {

    if (operator === "") {

        if (value === "." && firstNumber.includes(".")) {
            return;
        }

        firstNumber += value;

    } else {

        if (value === "." && secondNumber.includes(".")) {
            return;
        }

        secondNumber += value;
    }

    updateDisplay();
}

function chooseOperation(selectedOperator) {

    if (firstNumber === "") {
        return;
    }

    operator = selectedOperator;

    updateDisplay();
}

function calculate() {

    if (firstNumber === "" || secondNumber === "") {
        return;
    }

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let answer;

    if (operator === "+") {

        answer = num1 + num2;

    } else if (operator === "-") {

        answer = num1 - num2;

    } else if (operator === "*") {

        answer = num1 * num2;

    } else if (operator === "/") {

        if (num2 === 0) {

            document.getElementById("display").textContent = "Cannot divide by 0";

            firstNumber = "";
            secondNumber = "";
            operator = "";

            return;
        }

        answer = num1 / num2;
    }

    answer = Number(answer.toFixed(2));

    firstNumber = answer.toString();
    secondNumber = "";
    operator = "";

    updateDisplay();
}

function clearDisplay() {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    updateDisplay();
}

function backspace() {

    if (secondNumber !== "") {

        secondNumber = secondNumber.slice(0, -1);

    } else if (operator !== "") {

        operator = "";

    } else {

        firstNumber = firstNumber.slice(0, -1);

    }

    updateDisplay();
}