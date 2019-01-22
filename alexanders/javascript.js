var count = 0;
var increase = 1;
var autoincreasetime = 99999999999999999999;

function oncl(){
    count += increase;
    textUpdate();
}
function textUpdate(){
    document.getElementById("scorecounter").innerHTML = count;
    
}
function upgrade(){
   switch (increase) {
      case 1:
      if (count >= 10){
        increase = 2;
        count-=10;   document.getElementById("inc").innerHTML = "Get another chicken for 300:-";
      }
      case 2:
      if (count >= 30){
        increase = 4;
        count -= 30;   document.getElementById("inc").innerHTML = "Get another chicken for 1000:-";  
      }
      case 4:
      if (count >= 100){
        increase = 8;
        count -= 100;   document.getElementById("inc").innerHTML = "Get another chicken for 3000:-";
      }
      case 8:
      if (count >= 300){
        increase = 16;
        count -= 300;   document.getElementById("inc").innerHTML = "Maximum amount of chickens!";
      }
}
}


function warpmachine() {
    if (count >= 175) {
        count -= 175;
        autoincreasetime = 2000;
        setInterval(oncl, autoincreasetime); document.getElementById("warp1").innerHTML = "You have a warp-machine!"
    }
}
function warpmachine_upg1() {
    if (count >= 300) {
        count -= 300;
        autoincreasetime = 1000;
        setInterval(oncl, autoincreasetime); document.getElementById("warp2").innerHTML = "Warpmachine has been upgraded to lvl 2!"
    }
}
function warpmachine_upg2() {
    if (count >= 700) {
        count -= 700;
        autoincreasetime = 500;
        setInterval(oncl, autoincreasetime); document.getElementById("warp3").innerHTML = "Warpmachine has been upgraded to lvl 3!"
    }
}

function warpmachine_upg3() {
    if (count >= 2000) {
        count -= 2000;
        autoincreasetime = 200;
        setInterval(oncl, autoincreasetime); document.getElementById("warp4").innerHTML = "Warpmachine is at max lvl!"
    }
}