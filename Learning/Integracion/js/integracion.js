
var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    var name = prompt('Enter a new name');
    if (name < 1) {
        updateName();
    } else {
        para.textContent = 'Player 1: ' + name;
        console.log(para.textContent);
    }
}

function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
  var buttons = document.querySelectorAll('button');
  
  for (var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
}