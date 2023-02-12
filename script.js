let operatorCount = 0;
let operator = '';
let num1 = 0;
let num2 = 0;

const equation = document.querySelector('#equation');

function display(text){
    equation.textContent += text;
}

function reset(){
    equation.textContent = 0;
    operatorCount = 0;
    operator = '';
    num1 = 0;
    num2 = 0;
}

function operationCheck(){
    if(operatorCount > 0){
        operationSetup();
    }else{
        num1 = equation.textContent;
    }

    operatorCount++;
}   

function operationSetup(){
    num2 = parseFloat(equation.textContent.substring(equation.textContent.indexOf(operator) + 1));
    operate(operator, parseFloat(num1), num2);
    operatorCount = 0;
}

function operate(op, a, b){
    let answer;
    if(op == '+')
        answer = add(a, b);
    else if(op == '-')
        answer = subtract(a, b);
    else if(op == '*')
        answer = multiply(a, b);
    else if(op == '/')
        answer = divide(a, b);

    equation.textContent = answer.toFixed(3);
}

function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b){
    return parseFloat(a) / parseFloat(b);
}

const numBtns = document.querySelectorAll('.number');

numBtns.forEach((button) =>
    button.addEventListener('click', () => display(button.textContent))
)

const operationBtns = document.querySelector('#operations');
const array = Array.from(operationBtns.querySelectorAll('button'));

array.forEach((button) =>
    button.addEventListener('click', () => {
    operationCheck();
    operator = button.textContent;
    display(button.textContent);
    })
)

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => reset());

const undo = document.querySelector('#undo');
undo.addEventListener('click', () => equation.textContent = equation.textContent.substring(0, equation.textContent.length - 1));

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => operationSetup());