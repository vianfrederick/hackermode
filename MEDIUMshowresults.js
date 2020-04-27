document.querySelector(".container4").innerHTML = "Your best scores";

var input = JSON.parse(localStorage.getItem("itemsMEDIUM")).length;

if(input == 1){
   var displayMilliSeconds = parseInt(localStorage.getItem("topMEDIUM"))%1000;
  displayMilliSeconds =  properOrientation(displayMilliSeconds);
  document.querySelector(".tops").innerHTML = Math.floor(parseInt(localStorage.getItem("topMEDIUM"))/1000) + " : " + displayMilliSeconds + "&#129305";
   localStorage.removeItem("NETTIMEMEDIUM");
}

else if (input == 2) {
var displayMilliSeconds = parseInt(localStorage.getItem("topMEDIUM"))%1000;
displayMilliSeconds = properOrientation(displayMilliSeconds);
var displayMilliSeconds2 = parseInt(localStorage.getItem("runnerMEDIUM"))%1000;
displayMilliSeconds2 = properOrientation(displayMilliSeconds2);
  document.querySelector(".tops").innerHTML = Math.floor(parseInt(localStorage.getItem("topMEDIUM"))/1000) + " : " + displayMilliSeconds + "&#129305";
  document.querySelector(".runners").innerHTML = Math.floor(parseInt(localStorage.getItem("runnerMEDIUM"))/1000) + " : " + displayMilliSeconds2 + "&#129310";
localStorage.removeItem("NETTIMEMEDIUM");
}

else if(input == 3){
  var displayMilliSeconds = parseInt(localStorage.getItem("topMEDIUM"))%1000;
  displayMilliSeconds = properOrientation(displayMilliSeconds);
  var displayMilliSeconds2 = parseInt(localStorage.getItem("runnerMEDIUM"))%1000;
  displayMilliSeconds2 = properOrientation(displayMilliSeconds2);
  var displayMilliSeconds3 = parseInt(localStorage.getItem("thirdMEDIUM"))%1000;
  displayMilliSeconds3 = properOrientation(displayMilliSeconds3);

  document.querySelector(".tops").innerHTML = Math.floor(parseInt(localStorage.getItem("topMEDIUM"))/1000) + " : " + displayMilliSeconds + "&#129305";
  document.querySelector(".runners").innerHTML = Math.floor(parseInt(localStorage.getItem("runnerMEDIUM"))/1000) + " : " + displayMilliSeconds2 + "&#129310";
  document.querySelector(".thirds").innerHTML = Math.floor(parseInt(localStorage.getItem("thirdMEDIUM"))/1000) + " : " + displayMilliSeconds3  + "&#129309";
  localStorage.removeItem("NETTIMEMEDIUM");
}

else if(input == 4){
  var displayMilliSeconds = parseInt(localStorage.getItem("topMEDIUM"))%1000;
  displayMilliSeconds = properOrientation(displayMilliSeconds);
  var displayMilliSeconds2 = parseInt(localStorage.getItem("runnerMEDIUM"))%1000;
  displayMilliSeconds2 = properOrientation(displayMilliSeconds2);
  var displayMilliSeconds3 = parseInt(localStorage.getItem("thirdMEDIUM"))%1000;
  displayMilliSeconds3 = properOrientation(displayMilliSeconds3);
  var displayMilliseconds4 =  parseInt(localStorage.getItem("fourthMEDIUM"))%1000;
  displayMilliseconds4 = properOrientation(displayMilliseconds4);

  document.querySelector(".tops").innerHTML = Math.floor(parseInt(localStorage.getItem("topMEDIUM"))/1000) + " : " + displayMilliSeconds + "&#129305";
  document.querySelector(".runners").innerHTML = Math.floor(parseInt(localStorage.getItem("runnerMEDIUM"))/1000) + " : " + displayMilliSeconds2 + "&#129310";
  document.querySelector(".thirds").innerHTML = Math.floor(parseInt(localStorage.getItem("thirdMEDIUM"))/1000) + " : " + displayMilliSeconds3 + "&#129309";
  document.querySelector(".fourths").innerHTML = Math.floor(parseInt(localStorage.getItem("fourthMEDIUM"))/1000) + " : " + displayMilliseconds4;
  localStorage.removeItem("NETTIMEMEDIUM");
}

else{
  var displayMilliSeconds = parseInt(localStorage.getItem("topMEDIUM"))%1000;
  displayMilliSeconds = properOrientation(displayMilliSeconds);
  var displayMilliSeconds2 = parseInt(localStorage.getItem("runnerMEDIUM"))%1000;
  displayMilliSeconds2 = properOrientation(displayMilliSeconds2);
  var displayMilliSeconds3 = parseInt(localStorage.getItem("thirdMEDIUM"))%1000;
  displayMilliSeconds3 = properOrientation(displayMilliSeconds3);
  var displayMilliseconds4 =  parseInt(localStorage.getItem("fourthMEDIUM"))%1000;
  displayMilliseconds4 = properOrientation(displayMilliseconds4);
  var displayMilliseconds5 = parseInt(localStorage.getItem("fifthMEDIUM"))%1000;
  displayMilliseconds5 = properOrientation(displayMilliseconds5);

  document.querySelector(".tops").innerHTML = Math.floor(parseInt(localStorage.getItem("topMEDIUM"))/1000) + " : " + displayMilliSeconds + "&#129305";
  document.querySelector(".runners").innerHTML = Math.floor(parseInt(localStorage.getItem("runnerMEDIUM"))/1000) + " : " + displayMilliSeconds2 + "&#129310";
  document.querySelector(".thirds").innerHTML = Math.floor(parseInt(localStorage.getItem("thirdMEDIUM"))/1000) + " : " + displayMilliSeconds3 + "&#129309";
  document.querySelector(".fourths").innerHTML = Math.floor(parseInt(localStorage.getItem("fourthMEDIUM"))/1000) + " : " + displayMilliseconds4;
  document.querySelector(".fifths").innerHTML = Math.floor(parseInt(localStorage.getItem("fifthMEDIUM"))/1000) + " : " + displayMilliseconds5 ;
  localStorage.removeItem("NETTIMEMEDIUM");
}




function properOrientation(w){
  var digit =0;
  var d=w;
  while(w!=0){
    w=Math.floor(w/10);
    digit =digit +1;
  }

  if(digit == 1){
    var g = "0" + "0" + d;
  }
  else if (digit ==2) {
    var g = "0" + d;
  }
  else{
    g=d;
  }
  return g;
}
