const buttons = document.getElementsByClassName('cbutton');
const output = document.getElementById('output');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let val = this.innerHTML;
    output.innerHTML = val;
  });
}
