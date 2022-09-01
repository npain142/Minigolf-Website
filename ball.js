
const grid = document.getElementById("grid");
const ball = document.getElementById("ball");

add();
function add(){

  for(let i =0;i<150;i++){
    ball.innerHTML += "<div class=grid></div>";

  }
}