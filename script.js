function calculate() {
    // Input Values
    let num1 = parseFloat(document.getElementById('number1').value); // Changed 'num1' to 'number1'
    let num2 = parseFloat(document.getElementById('number2').value); // Changed 'num2' to 'number2'
    let operator = document.getElementById('operator').value;
    let result; 

    // Perform calculation
    if (operator === '+') {
        result = num1 + num2;
    } 
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            result = 'Error';
        } else {
            result = num1 / num2;
        }
    }
    else {
        result = 'Error: Invalid operator';
    }

    // Display Result
    document.getElementById('result').textContent = result; 
    console.log(result);
    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('operator:', operator);
    console.log('result:', result);
}
