var sum = 0
var add = 1
var autoClickActivated = false;
var autoClickActivated_2 = false;

function activate_auto(){
    if (autoClickActivated == false && sum>9999){
        auto_click()
 }
}
function auto_click(){
    if(add>0){
        autoClickActivated = true;
        setTimeout(function(){
            document.getElementById("cookie").click();
            auto_click()
        }, 200)
    }
}

function activate_auto_2(){
    if (autoClickActivated_2 == false && sum>4999999){
        auto_click_2()
 }
}
function auto_click_2(){
    if(add>0){
        autoClickActivated = true;
        setTimeout(function(){
            document.getElementById("cookie").click();
            auto_click_2()
        }, 200)
    }
}

function increase_perClick(){
    document.getElementById("per-click").textContent = add
}

function increase(){
    sum = sum + add
    document.getElementById("score").textContent = sum

   light()
   light_2()
   light_3()
   light_4()
   light_5()
   light_6()
   
}

function light(){
    if(sum>99){
        document.getElementById("upg_1").setAttribute("class", "upg_1_afford");
    }
}

function light_2() {
    if(sum>999){
        document.getElementById("upg_2").setAttribute("class", "upg_2_afford")
    }
}
function light_3 (){
    if(sum>9999){
        document.getElementById("upg_3").setAttribute("class", "upg_3_afford")
        document.getElementById("upg-6").setAttribute("class", "upg_6_afford")
    }
}
function light_4 (){
    if(sum>99999){
        document.getElementById("upg_4").setAttribute("class", "upg_4_afford")
    }
}
function light_5 (){
    if(sum>999999){
        document.getElementById("upg_5").setAttribute("class", "upg_5_afford")
       
    }
}
function light_6 (){
    if(sum>4999999){
        document.getElementById("upg-7").setAttribute("class", "upg_7_afford")
    }
}


function increase_add_1(){
    if(sum>99 && add<10){
            add = add+9 
            increase_perClick()
    }
}

function increase_add_2(){
    if(sum>999 && add<100){
        add = add+90
        increase_perClick()
    }
}

function increase_add_3(){
    if(sum>9999 && add<1000){
        add = add+900
        increase_perClick()
    }
}

function increase_add_4(){
    if(sum>99999 && add<10000){
        add = add+9000
        increase_perClick()
    }
}

function increase_add_5(){
    if(sum>999999 && add<100000){
        add = add+90000
        increase_perClick()
    }
}

