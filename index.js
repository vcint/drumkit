var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrumButtons;i++){
  
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML=this.innerHTML;

     makesound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
    });
   
}
document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key){

  switch(key){
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a" :
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
      case "s" :
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
      case "d" :
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
      case "j" :
      var tom5 = new Audio('sounds/snare.mp3');
      tom5.play();
      break;
      case "k" :
      var tom6 = new Audio('sounds/crash.mp3');
      tom6.play();
      break;
      case "l" :
      var tom7 = new Audio('sounds/kick-bass.mp3');
      tom7.play();
      break;
      default:console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    if(activeButton.innerHTML==="w"){
      document.getElementById("bdy").classList.add("redb");
    }
    else if(activeButton.innerHTML==="a"){
      document.getElementById("bdy").classList.add("green");
    }
   else if(activeButton.innerHTML==="s"){
      document.getElementById("bdy").classList.add("yellow");
    }
    else  if(activeButton.innerHTML==="d"){
      document.getElementById("bdy").classList.add("blue");
    }
    else if(activeButton.innerHTML==="j"){
      document.getElementById("bdy").classList.add("unclr");
    }
    else  if(activeButton.innerHTML==="k"){
      document.getElementById("bdy").classList.add("white");
    }
    else if(activeButton.innerHTML==="l"){
      document.getElementById("bdy").classList.add("black");
    }
    setTimeout(function(){
      if(activeButton.innerHTML==="w"){
        document.getElementById("bdy").classList.remove("redb");
      }
      else if(activeButton.innerHTML==="a"){
        document.getElementById("bdy").classList.remove("green");
      }
     else if(activeButton.innerHTML==="s"){
        document.getElementById("bdy").classList.remove("yellow");
      }
      else  if(activeButton.innerHTML==="d"){
        document.getElementById("bdy").classList.remove("blue");
      }
      else if(activeButton.innerHTML==="j"){
        document.getElementById("bdy").classList.remove("unclr");
      }
      else  if(activeButton.innerHTML==="k"){
        document.getElementById("bdy").classList.remove("white");
      }
      else if(activeButton.innerHTML==="l"){
        document.getElementById("bdy").classList.remove("black");
      }
      activeButton.classList.remove("pressed");
      
    },50);
}

// const bgchange =document.querySelector("[wdrum]");
// bgchange.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("red");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("red");
    
//   },70);
// });
// const bgchange2 =document.querySelector("[adrum]");
// bgchange2.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("green");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("green");
//   },70);
// });

// const bgchange3 =document.querySelector("[sdrum]");
// bgchange3.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("yellow");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("yellow");
    
//   },70);
// });
// const bgchange4 =document.querySelector("[ddrum]");
// bgchange4.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("blue");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("blue");
//   },70);
// });
// const bgchange5 =document.querySelector("[jdrum]");
// bgchange5.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("unclr");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("unclr");
//   },70);
// });
// const bgchange6 =document.querySelector("[kdrum]");
// bgchange6.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("white");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("white");
//   },70);
// });
// const bgchange7 =document.querySelector("[ldrum]");
// bgchange7.addEventListener("click",()=>{
//   document.getElementById("bdy").classList.toggle("black");
//   setTimeout(function(){
//     document.getElementById("bdy").classList.remove("black");
//   },70);
// });