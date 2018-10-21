//for ajax  connection with  json file 
var  return_data ;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        return_data = this.responseText;
        return_data=JSON.parse(return_data);
        var image=document.getElementsByTagName("img");
          for(i=0;i<return_data.length;i++)
           {
            image[i].setAttribute("src",return_data[i].src);
           }
      }
    }

    xhttp.send();
   


    //global variables
    var numclicks=30;
    var has_active_click=false;
    var Closedcard =false;
     var first_memory_card ;
     var secend_memory_card ;
    var score=0;
    var second = 0, minute = 0 , hour=0;
    var timmer;

    const cards=document.querySelectorAll(".memory-card");
   var myscore=document.getElementById("score");
    myscore.innerHTML="score:" + score;
    var numofclickes=document.getElementById("clicks");
    numofclickes.innerHTML="moves:" + numclicks;



// function for star game it start work when click on button start

function start(){
 
 
function active_click()
{ 
   if(!Closedcard)
   {
  
     this.classList.remove("rotatclass");
       chick_nummoves();
      

     if(!has_active_click)
     { 
        has_active_click=true;
        first_memory_card= this;
     }else
     {
      has_active_click=false;
      secend_memory_card=this;
      check_for_match();
     }
    }
    
    
   
//for check maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaching

function check_for_match() {
//case onee  eeeeeeeeeeeeeeeeeee
  if(first_memory_card.dataset.framwork===secend_memory_card.dataset.framwork)
  {
    if(first_memory_card.id != secend_memory_card.id){
    first_memory_card.removeEventListener("click" , active_click);
    secend_memory_card.removeEventListener("click" , active_click);
    score++;
    if(score >= 8){
      clearInterval(timmer);
      console.log("gftydtfgh");

    }
    var myscore=document.getElementById("score");
    myscore.innerHTML="score:" + score;
    }
  //case twooooooooooooooooooooooooooooooooooooooooooooo
  }else
  {
    Closedcard=true;
    setTimeout(()=>{
      first_memory_card.classList.add("rotatclass");
      secend_memory_card.classList.add("rotatclass");
      Closedcard=false;
    }
    ,1700);
  }

}
   checkscore();
}

time();


(function shuffle(){
  cards.forEach(card => {
    
    let randompos=Math.floor(Math.random()*16);
    card.style.order= randompos;
  })
})();

//for loop to active click for aaaaaall dives

for(i=0; i<cards.length ;i++)
{
    cards[i].addEventListener("click" , active_click);
}

}


// function check final score and return  alert message  but not complet yet .......
function checkscore()
{
  if(score==8)
  {
    // Get the modal
   var modal = document.getElementById('myModal');
   modal.style.display = "block";
    var mymassage=document.getElementById("massage");
     mymassage.innerHTML=" boooooooooom boooooom booooomm lololllolllollolllollloly  congratolation";
   
  }
}


 //function for start timeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  var timer=document.getElementById("start_time");
  
  
  function time(){
  timmer=setInterval(function(){
  timer.innerHTML = " hour:  "+   "  "  + hour + " Min:  "+   "  "  + minute +" "+ "Sec : " +" "+second;    
    second++;
    if(second == 60){
        minute++;
        second = 0;
    }
    if(minute == 60){
        hour++;
        minute = 0;
    }
},1000); 
}

//chick moves  and stop paying if it == 0

function chick_nummoves()
{
     if( numclicks>0)
           {
              numclicks--;
               numofclickes.innerHTML="moves:" + numclicks;
           }else if(numclicks<=0)
               {
                    var modal = document.getElementById('myModal');
                      modal.style.display = "block";
                
                    var mymassage=document.getElementById("massage");
                     mymassage.innerHTML="hard luck ";
               }
}
// function for reordered cards but not complet yet ......

