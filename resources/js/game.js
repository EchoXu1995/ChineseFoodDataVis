let leftOption = 4;

let trueRegional = document.querySelectorAll(".trueRegional");
for(let i = 0; i < trueRegional.length; i++ ){
    trueRegional[i].addEventListener("click",function(){
        this.style.backgroundColor ='#EA7D57';
    })
}

let trueCommon = document.querySelectorAll(".trueCommon");
for(let i = 0; i < trueCommon.length; i++ ){
    trueCommon[i].addEventListener("click",function(){
        this.style.backgroundColor ='#CCCC99';
    })
}

let truePrecious = document.querySelectorAll(".truePrecious");
for(let i = 0; i < truePrecious.length; i++ ){
    truePrecious[i].addEventListener("click",function(){
        this.style.backgroundColor ='#F29F4E';
    })
}

let faulse = document.querySelectorAll(".faulse");
for(let i = 0; i < faulse.length; i++ ){
    faulse[i].addEventListener("click",function(){
        this.style.backgroundColor ='darkgrey';
        leftOption--;
        document.querySelector("#option-num").textContent = leftOption;
        console.log("left option:"+leftOption);
        //start section03
        if(leftOption === 0){
            document.querySelector("#option-num-full").style.display = "none";
            $("#c5").fadeIn(500);
            console.log("Dialog2 Starts!");
            setTimeout(function(){$("#a6").slideDown();},2500);
            setTimeout(function(){$("#b6").slideDown();},2500);
            setTimeout(function(){$("#d6").slideDown();},2500);
            setTimeout(function(){$("#d61").slideDown();},4000);
            setTimeout(function(){$("#d7").slideDown();},5700);
            setTimeout(function(){$("#c8").fadeIn();},7400);
        }
    })
}

