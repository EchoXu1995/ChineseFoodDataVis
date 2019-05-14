//get system time
function getTime(){
    let myDate = new Date();
    return myDate.toLocaleTimeString();
}
x = getTime();

//buttons
document.querySelector("#c4").addEventListener("click", function(){
                                               document.querySelector("#section02").style.display = "block";
                                               })

document.querySelector("#c5").addEventListener("click", function(){
                                               document.querySelector("#section03").style.display = "block";
                                               })

document.querySelector("#show-china").addEventListener("click", function(){
                                               document.querySelector("#famine-chart").src = "resources/img/famines-china.jpg";
                                               })
document.querySelector("#c8").addEventListener("click", function(){
                                               document.querySelector("#reasons").style.display = "block";
                                               $(document).ready(function() {
                                                   $("#waypoint02").waypoint(function(direction){
                                                       
                                                       //dialog03
                                                       console.log("Dialog3 Starts!")
                                                       $("#a9").fadeIn(500);
                                                       $("#b9").show();
                                                       $("#d9").slideDown();
                                                       setTimeout(function(){$("#a10").fadeIn(500);},1700);
                                                       setTimeout(function(){$("#b10").show();},1700);
                                                       setTimeout(function(){$("#d10").slideDown();},1700);
                                                       setTimeout(function(){$("#a11").fadeIn(500);},3400);
                                                       setTimeout(function(){$("#b11").show();},3400);
                                                       setTimeout(function(){$("#d11").slideDown();},3400);
                                                       setTimeout(function(){$("#a12").fadeIn(500);},5100);
                                                       setTimeout(function(){$("#b12").show();},5100);
                                                       setTimeout(function(){$("#d12").slideDown();},5100);
                                                   },{
                                                   offset: '500px'
                                                   });
                                                   });
                                                   
    
                                                   //chicken chart
                                                   $(document).ready(function() {
                                                   $("#waypoint03").waypoint(function(direction){
                                                       
                                                       setTimeout(function(){$("#chicken-chart").slideDown();},1000);
                                                   },{
                                                   offset: '500px'
                                                   });
                                                   });
    
    
    
                                                   //highlight climax
                                                   $(document).ready(function() {
                                                   $("#waypoint04").waypoint(function(direction){
                                                       console.log("show the climax!")
                                                       setTimeout(function(){$("#climax").slideDown();},1000);
                                                   },{
                                                   offset: '0px'
                                                   });
                                                   });
    
    
                                                    //show the falling action
    
                                                   $(document).ready(function() {
                                                   $("#waypoint05").waypoint(function(direction){
                                                       
                                                       
                                                       console.log("Falling action Starts!")
                                                       $("#a13").fadeIn(500);
                                                       $("#b13").show();
                                                       $("#d13").slideDown();
                                                       setTimeout(function(){$("#d14").fadeIn(500);},1500);
                                                       
                                                       $(document).ready(function() {
                                                           $("#waypoint06").waypoint(function(direction){
                                                           console.log("show the climax!")
                                                           setTimeout(function(){$("#a15").fadeIn(500);},500);
                                                           setTimeout(function(){$("#b15").show();},500);
                                                           setTimeout(function(){$("#d15").slideDown();},500);
                                                           setTimeout(function(){$("#d16").slideDown();},2500);
                                                           setTimeout(function(){$("#d17").slideDown();},5000);
                                                           setTimeout(function(){$("#c17").fadeIn(500);},6000);
                                                        },{
                                                        offset: '100px'
                                                        });
                                                        });
                                                       
                                                   },{
                                                   offset: '-300px'
                                                   });
                                                   });
    
                                               })

document.querySelector("#c17").addEventListener("click", function(){
                                               document.querySelector("#section04").style.display = "block";
                                               console.log("joke Starts!");
                                               //joke
                                               $("#a18").fadeIn(500);
                                               $("#b18").show();
                                               $("#d18").slideDown();
                                               setTimeout(function(){$("#a19").fadeIn(500);},1500);
                                               setTimeout(function(){$("#b19").show();},1500);
                                               setTimeout(function(){$("#d19").slideDown();},1500);
                                               //bonus
                                               setTimeout(function(){$("#a20").fadeIn(500);},5000);
                                               setTimeout(function(){$("#b20").show();},5000);
                                               setTimeout(function(){$("#d20").slideDown();},5000);
                                               setTimeout(function(){$("#d21").slideDown();},6500);
                                               setTimeout(function(){$("#c21").fadeIn();},7500);
});

document.querySelector("#c21").addEventListener("click", function(){
                                               document.querySelector("#section05").style.display = "block";
                                               $("#a22").fadeIn(500);
                                               $("#b22").show();
                                               $("#d22").slideDown();
                                               setTimeout(function(){$("#d23").slideDown();},2000);
    
});

/*    $('.home-page-icon').click(function () {
       $('html, body').animate({scrollTop: $('.js--enter').offset().top}, 1000); 
    });
*/
//smooth navigation controll
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    });
    

//Dialog1

$(document).ready(function() {
  $("#waypoint01").waypoint(function(direction){
      console.log("Dialog1 Starts!")
      $("#a1").fadeIn(500);
      $("#b1").show();
      $("#d1").slideDown();
      setTimeout(function(){$("#d2").slideDown();},1500);
      setTimeout(function(){$("#d3").slideDown("show");},4000);
      setTimeout(function(){$("#d4").slideDown();},6000);
      setTimeout(function(){$("#c4").fadeIn();},7500);


  },{
  offset: '500px'
});
});

//Dialog2 is moved to game.js


//show the explain of what Chinese people don't eat.(panda goldfish baby)
let imgName = document.querySelectorAll(".dont-eat-name");
let imgExplain = document.querySelectorAll(".dont-eat-kind");

for(let i = 0; i < imgName.length; i++ ){
    imgName[i].addEventListener("mouseover",function(){
        imgExplain[i].style.opacity = "1";
        imgExplain[i].style.fontSize= "60%";
        console.log("hover");
    })
    
}