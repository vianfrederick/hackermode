var milliSeconds=0;
var count61=0;
var seconds=0;
var nettime;
var timeStatus = "stopped";
var interval;
var count=0;
var count1=0;
var key=1;
var finalButton;
var initialButton;
var count3 = 0;
var key1 =21;
var count4=0;
var count5=0;
function stopWatch() {
  milliSeconds++;
  if(milliSeconds/1000 ==1){
    milliSeconds=0;
    seconds++;
  }
  document.querySelector("h2").innerHTML = seconds +':'+ milliSeconds;
  localStorage.setItem("SECONDSHARD", seconds);
  localStorage.setItem("MILLISECONDSHARD", milliSeconds);
  nettime = (seconds*1000) + milliSeconds;
  localStorage.setItem("NETTIMEHARD", nettime);
}

function checkCorrectButton(buttonNumber){
if(buttonNumber <20){
buttonNumber=buttonNumber+1;

  document.querySelectorAll("button")[buttonNumber-1].addEventListener("click", changeButton);
   key=key+1;
}
  else{

    if (count3 >= 20)
    {
      if(buttonNumber == 21){
        document.querySelector("button").style.visibility = "hidden";
        document.querySelectorAll("button")[1].addEventListener("click", secondRound);
      count4 = document.querySelectorAll("button")[1].innerHTML;}

      else{
    buttonNumber = buttonNumber - 20;
    buttonNumber=buttonNumber+1;
    document.querySelectorAll("button")[buttonNumber-3].style.visibility ="hidden";
    document.querySelectorAll("button")[buttonNumber-2].addEventListener("click", secondRound);
  count4 = document.querySelectorAll("button")[buttonNumber-2].innerHTML;}
}
}
  }



function changeButton(){

initialButton = parseInt(this.innerHTML);
if(initialButton <= 20){
count3 = count3 + 1;
  finalButton = initialButton + 20;
  this.innerHTML = finalButton;
  if(this.innerHTML == 21){document.querySelectorAll("button")[0].classList.add("twentyone");}
if(this.innerHTML == 22){document.querySelectorAll("button")[1].classList.add("twentytwo");}
if(this.innerHTML == 23){document.querySelectorAll("button")[2].classList.add("twentythree");}
if(this.innerHTML == 24){document.querySelectorAll("button")[3].classList.add("twentyfour");}
if(this.innerHTML == 25){document.querySelectorAll("button")[4].classList.add("twentyfive");}
if(this.innerHTML == 26){document.querySelectorAll("button")[5].classList.add("twentysix");}
if(this.innerHTML == 27){document.querySelectorAll("button")[6].classList.add("twentyseven");}
if(this.innerHTML == 28){document.querySelectorAll("button")[7].classList.add("twentyeight");}
if(this.innerHTML == 29){document.querySelectorAll("button")[8].classList.add("twentynine");}
if(this.innerHTML == 30){document.querySelectorAll("button")[9].classList.add("thirty");}
if(this.innerHTML == 31){document.querySelectorAll("button")[10].classList.add("thirtyone");}
if(this.innerHTML == 32){document.querySelectorAll("button")[11].classList.add("thirtytwo");}
if(this.innerHTML == 33){document.querySelectorAll("button")[12].classList.add("thirtythree");}
if(this.innerHTML == 34){document.querySelectorAll("button")[13].classList.add("thirtyfour");}
if(this.innerHTML == 35){document.querySelectorAll("button")[14].classList.add("thirtyfive");}
if(this.innerHTML == 36){document.querySelectorAll("button")[15].classList.add("thirtysix");}
if(this.innerHTML == 37){document.querySelectorAll("button")[16].classList.add("thirtyseven");}
if(this.innerHTML == 38){document.querySelectorAll("button")[17].classList.add("thirtyeight");}
if(this.innerHTML == 39){document.querySelectorAll("button")[18].classList.add("thirtynine");}
if(this.innerHTML == 40){document.querySelectorAll("button")[19].classList.add("forty");}
if(key<20){
  checkCorrectButton(key);}
  }
  if(initialButton == 21)
  {if(count3>=20){
    checkCorrectButton(key1);}
  }


}

function secondRound(){
count4 = parseInt(count4);
count4 = count4 + 1;

if(count4 == 41){
  count5 = 40;
  document.querySelectorAll("button")[19].style.visibility = "hidden";
  clearInterval(interval);
  displayResults();
}

if (count4 <=40){
checkCorrectButton(count4);}
}
//document.querySelector("button").addEventListener("click", startTime);


document.querySelector("button").addEventListener("click", changeButton);
document.querySelector(".results2").addEventListener("click",localStorage.setItem("count6HARD", count61));



function startStopTime(startOrStop)
{
  createSound();
  startOrStop = parseInt(startOrStop);
  count1++;
  if(startOrStop == 1){
    if(count1 == 1){
    interval = setInterval(stopWatch,1);}
  }
  if (startOrStop == 40){

      if(count5 == 40){clearInterval(interval);}

  }

}

function displayResults(){

  setTimeout(function(){
  window.location.replace("HARDResults.html");
}, 100);
}


function createSound(){
  var audio= new Audio("SOUND.mp3");
      audio.play();
}
