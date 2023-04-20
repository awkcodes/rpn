const exp_numbers = [];

function handleOperator(operator: string) {
  const [b, a] = [exp_numbers.pop(), exp_numbers.pop()];
  let result: number;
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

function handleDigit(digit: string) {
  exp_numbers.push(parseFloat(digit));
}

function rpnCalculator(input: string) {
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

// html interface
function getvalue(){
    const formInput = document.getElementById('rpn-input') as HTMLTextAreaElement;
    const rpnResult = document.getElementById('rpn-result');
    const expression = formInput.value;
    console.log(rpnResult)
    let result: number;
    try {
        result = rpnCalculator(expression);
    } catch(e) {
        rpnResult.innerText = `error occured :: ${e}`;
        return;
    }
    rpnResult.innerText = `result is :: ${result}`;
}

// nodejs/cli interface
function readCli(){
    let args = process.argv.slice(2);
    let expression = args.join(' ');
    console.log(rpnCalculator(expression));
}

readCli()
