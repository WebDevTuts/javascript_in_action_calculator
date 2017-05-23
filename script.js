const buttons = document.getElementsByClassName('cbutton');
const output = document.getElementById('output');
let calc = "";
let completed = false;
let operator = false;
let operators = ["+", "-", "*", "/"];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let val = this.innerHTML;
    if (completed) {
      completed = false;
      calc = "";
    }

    if (val == "+" || val == "-" || val == "*" || val == "/") {
      operator = true;
      if (operator) {
        operator = false;
        if (operators.indexOf(output.innerHTML.slice(-1)) > -1) {
          calc = calc.substring(0, calc.length - 1);
        } else {
          calc = eval(calc);
        }
      }
    }

    if (val == "=") {
      val = "";
      if (operators.indexOf(output.innerHTML.slice(-1)) == -1) {
        calc = eval(calc);
        completed = true;
      }
    } else if (val == "C") {
      calc = 0;
      completed = true;
    } else {
      calc += val;
    }

    if (calc != "undefined") {
      output.innerHTML = calc;
    } else if (calc == undefined) {
      calc = "";
      output.innerHTML = "";
    }
  });
}
