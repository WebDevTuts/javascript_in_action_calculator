const buttons = document.getElementsByClassName('cbutton');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log('clicked');
  });
}
