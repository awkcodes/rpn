const exp_numbers = [];

function handleOperator(operator) {
  const [b, a] = [exp_numbers.pop(), exp_numbers.pop()];
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

function handleDigit(digit) {
  exp_numbers.push(parseFloat(digit));
}

function rpnCalculator(input) {
  const tokens = input.split(' ');
  for (const token of tokens) {
    if (!isNaN(parseFloat(token))) {
      handleDigit(token);
    } else {
      handleOperator(token);
    }
  }
  if (exp_numbers.length !== 1) {
    throw new Error('Invalid expression');
  }
  return exp_numbers.pop();
}
const 
const result = rpnCalculator('5 1 2 + 4 * + 3 -'); // evaluates to 14
console.log(result);