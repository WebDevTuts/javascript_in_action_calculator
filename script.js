const buttons = document.getElementsByClassName('cbutton');
const output = document.getElementById('output');
let calc = "";
let completed = false;
let operator = false;
let operators = ["+", "-", "*", "/"];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let val = this.innerHTML;
    if (completed || calc=="0") {
      completed = false;
      calc = "";
    }

    if (val == "+" || val == "-" || val == "*" || val == "/") {
      if (operator) {
        operator = false;
        if (operators.indexOf(output.innerHTML.slice(-1)) > -1) {
          calc = calc.substring(0, calc.length - 1);
        } else {
          calc = eval(calc);
        }
      }
      operator = true;
    }

    if (val == "=") {
      calc = eval(calc);
      completed = true;
    } else if (val == "C") {
      calc = 0;
      completed = true;
    } else {
      calc += val;
    }

    output.innerHTML = calc;
  });
}
