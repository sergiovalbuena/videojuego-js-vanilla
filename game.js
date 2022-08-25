const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
  //coordenadas dentro del canvas 
  game.fillRect(0, 0, 100, 100);

  game.font = '24px Verdana'
  game.fillStyle = 'purple'
  game.textAlign = 'end'
  game.fillText = ('Hello World', 5, 10); 
}