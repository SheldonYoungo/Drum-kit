
/* This function checks if a key was pressed wit a a switch statement. 
If the key pressed matches with one of the switch cases, it reproduce 
the sound assigned to that key.*/

function makeSound(key){
  switch(key){
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
      
      case 'a':
        var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
      
      case 's':
        var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
      
      case 'j':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case 'k':
          var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
      
      case 'l':
        var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    }     
}

// Adds animation to the current key pressed
function buttonAnimation(currentKey){
  var active = document.querySelector('.' + currentKey);

  active.classList.toggle('pressed');

  setTimeout(function() {
    active.classList.toggle('pressed');
  }, 100);
}

// Detecting button pressed
var drums = document.querySelectorAll('.drum');

for(i = 0;i < drums.length; i++){
  drums[i].addEventListener('click', function(){
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });

}

// Detecting key pressed
document.addEventListener('keydown', function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})
