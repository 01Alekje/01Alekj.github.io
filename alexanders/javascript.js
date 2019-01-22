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
      if (count >= 100){
        increase++;
        count-=100;   document.getElementById("inc").innerHTML = "Get another chicken for 300:-";
      }

      case 2:
      if (count >= 300){
        increase = 4;
        count -= 300;   document.getElementById("inc").innerHTML = "Get another chicken for 1000:-";  
   }

   case 4:
   
    if (count >= 1000){
        increase = 8;
        count -= 1000;   document.getElementById("inc").innerHTML = "Maximum amount of chickens!";
    }
}
}

function warpmachine() {
    if (count >= 1750) {
        count -= 1705;
        autoincreasetime = 2000;
        setInterval(oncl, autoincreasetime); document.getElementById("warp1").innerHTML = "You have a warp-machine!"
    }
}
function warpmachine_upg1() {
    if (count >= 3000) {
        count -= 3000;
        autoincreasetime = 1000;
        setInterval(oncl, autoincreasetime); document.getElementById("warp2").innerHTML = "Warpmachine has been upgraded to lvl 2!"
    }
}
function warpmachine_upg2() {
    if (count >= 7000) {
        count -= 7000;
        autoincreasetime = 500;
        setInterval(oncl, autoincreasetime); document.getElementById("warp3").innerHTML = "Warpmachine has been upgraded to lvl 3!"
    }
}

function warpmachine_upg3() {
    if (count >= 20000) {
        count -= 20000;
        autoincreasetime = 200;
        setInterval(oncl, autoincreasetime); document.getElementById("warp3").innerHTML = "Warpmachine has been upgraded to lvl 3!"
    }
}