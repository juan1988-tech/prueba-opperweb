const characters = document.querySelector('#charactersDelay');
const grayFirstButton = document.querySelector('#grayRectangleFirst');
const graySecondButton = document.querySelector('#grayRectangleSecond');
const grayThirdButton = document.querySelector('#grayRectangleThird');
console.log(grayThirdButton);

function primerBoton(){
  characters.style.transform = 'translateX(0%)';
  characters.style.transitionTimingFuncion = 'ease-in';
  characters.style.transitionDuration = '1s';
  grayFirstButton.style.background = '#C4C4C4';
  graySecondButton.style.background = '#7E6784';
  grayThirdButton.style.background = '#7E6784';
}

function segundoBoton(){
  characters.style.transform = 'translateX(-80%)';
  characters.style.transitionTimingFuncion = 'ease-in';
  characters.style.transitionDuration = '1s';
  graySecondButton.style.background = '#C4C4C4';
  grayFirstButton.style.background = '#7E6784';
  grayThirdButton.style.background = '#7E6784';
}

function tercerBoton(){
  characters.style.transform = 'translateX(-160%)';
  characters.style.transitionTimingFuncion = 'ease-in';
  characters.style.transitionDuration = '1s';
  grayThirdButton.style.background = '#C4C4C4';
  grayFirstButton.style.background = '#7E6784';
  graySecondButton.style.background = '#7E6784';
}