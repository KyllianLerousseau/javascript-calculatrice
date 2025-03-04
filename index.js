const display = document.getElementById('display');
const boutons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');

let numberString = ""; 
let firstNumber = null; 
let currentOperator = null; 

boutons.forEach((bouton) => {
    bouton.addEventListener('click', () => {
        numberString += bouton.value; 
        display.innerHTML = numberString; 
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (numberString === "") return; 

        if (firstNumber === null) {
            firstNumber = Number(numberString);
        } else if (currentOperator) {
            firstNumber = calculate(firstNumber, Number(numberString), currentOperator);
            display.innerHTML = firstNumber;
        }

        currentOperator = operator.value; 
        numberString = "";
    });
});

equal.addEventListener('click', () => {
    if (firstNumber !== null && numberString !== "" && currentOperator !== null) {
        firstNumber = calculate(firstNumber, Number(numberString), currentOperator);
        display.innerHTML = firstNumber;
        currentOperator = null;
        numberString = ""; 
        firstNumber = null;
    }
});

clear.addEventListener('click', () => {
    numberString = "";
    firstNumber = null;
    currentOperator = null;
    display.innerHTML = "0"; 
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Erreur";
        default: return num2;
    }
}