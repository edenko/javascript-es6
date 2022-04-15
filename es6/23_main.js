var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var cactusImage = new Image();
var dinosaurImage = new Image();
cactusImage.src = '/images/cactus.png';
dinosaurImage.src = '/images/dinosaur.png';

// 공룡
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height); // 왼쪽 10x10 위치에, 100x100 사이즈의 네모
    // ctx.drawImage(dinosaurImage, this.x, this.y);
  }
}


// 장애물
class Cactus {
  constructor() {
    this.x = 300;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height); // 왼쪽 10x10 위치에, 100x100 사이즈의 네모
    // ctx.drawImage(cactusImage, this.x, this.y);
  }
}

var timer = 0;
var cactusMany = [];
var jumpTimer = 0;
var animation;

function frameOneSec() {
  animation = requestAnimationFrame(frameOneSec);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 장애물 등장
  if(timer % 230 === 0) {
    var cactus = new Cactus();
    cactusMany.push(cactus);
  }
  cactusMany.forEach((a, i, o) => {
    if(a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    collision(dino, a);

    a.draw();
  })

  // 점프 기능 
  if(jump == true) {
    dino.y -= 3;
    jumpTimer++;
  }
  if(jump == false) {
    if(dino.y < 200)
    dino.y += 3;
  }
  if(jumpTimer > 60) {
    jump = false;
    jumpTimer = 0;
  }
  
  dino.draw();
}

frameOneSec();


// collision detection
function collision(dino, cactus) {
  var xInterval = cactus.x - (dino.x + dino.width);
  var yInterval = cactus.y - (dino.y + dino.height);
  if(xInterval < 0 && yInterval < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}


var jump = false;
document.addEventListener('keydown', (e) => {
  if(e.code === 'Space') {
    jump = true;
  }
})
