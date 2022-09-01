
const vline = document.getElementById("vline");
const middle = document.getElementById("middle");

let pixel = 200;
let scrolls = 30;
let isNext = false;


function addLine(){

  if(window.scrollY>scrolls){
    if(!isNext){
      vline.style.marginTop = pixel+"px";
      pixel+=200;
      scrolls+=150;
      vline.style.marginRight = "-50%";

    }

    if(isNext){
      vline.style.marginTop = pixel+"px";
      pixel+=200;
      scrolls+=150;
      vline.style.marginRight = "50%";

    }

  
  
  isNext = !isNext;
  
  }

}

setInterval(addLine,10);