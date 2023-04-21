"use strict";
//import {rpnCalculator} from './index';
// nodejs/cli interface
//function readCli(){
//    let args = process.argv.slice(2);
//    let expression = args.join(' ');
//    console.log(rpnCalculator(expression));
//}
//readCli()
const exp_numbers = [];
function calculate(operator) {
    const [b, a] = [exp_numbers.pop(), exp_numbers.pop()];
    if (!b || !a)
        throw new Error('Invalid expression');
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
    exp_numbers.push(result);
}
function rpnCalculator(input) {
    const tokens = input.split(' ');
    for (let token of tokens) {
        !isNaN(parseFloat(token)) ? exp_numbers.push(parseFloat(token)) : calculate(token);
    }
    if (exp_numbers.length !== 1) {
        throw new Error('Invalid expression');
    }
    return exp_numbers.pop();
}
function getvalue() {
    const formInput = document.getElementById('rpn-input');
    const rpnResult = document.getElementById('rpn-result') || document.createElement("h2");
    const expression = formInput.value;
    let result;
    try {
        result = rpnCalculator(expression);
    }
    catch (e) {
        rpnResult.innerText = `error occured :: ${e}`;
        return;
    }
    rpnResult.innerText = `result is :: ${result}`;
}
