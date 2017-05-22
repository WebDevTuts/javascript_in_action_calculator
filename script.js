const buttons = document.getElementsByClassName('cbutton');
const output = document.getElementById('output');
let calc = "";
let completed = false;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let val = this.innerHTML;
    if (completed || calc=="0") {
      completed = false;
      calc = "";
    }

    if (val == "=") {
      calc = eval(calc);
      completed = true;
    } else if (val == "C") {
      calc = 0;
      completed = true;
    }

    calc += val;
    output.innerHTML = calc;
  });
}
