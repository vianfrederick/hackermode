var digit;
var dummyArray = [];
var max;
var seconds2 = parseInt(localStorage.getItem("SECONDSMEDIUM"));
var milliSeconds3 = parseInt(localStorage.getItem("MILLISECONDSMEDIUM"));

var n = milliSeconds3;
digit =0;
while(n!=0){
  n=Math.floor(n/10);
  digit=digit+1;
}

if(digit == 1){
  milliSeconds3 = "0" + "0" + milliSeconds3;
}
else if (digit == 2) {
  milliSeconds3 = "0" + milliSeconds3;
}





document.querySelector(".container3").innerHTML="Your time is " + seconds2 +':'+ milliSeconds3;

var secondsArray = localStorage.getItem("itemsMEDIUM") ?
JSON.parse(localStorage.getItem("itemsMEDIUM")) : []

localStorage.setItem("itemsMEDIUM", JSON.stringify(secondsArray));
if(localStorage.getItem("NETTIMEMEDIUM")){
secondsArray.push(localStorage.getItem("NETTIMEMEDIUM"));

localStorage.setItem("itemsMEDIUM", JSON.stringify(secondsArray));

/*if(secondsArray.length == 1){
  localStorage.setItem("top", secondsArray[0]);
}

else if (secondsArray.length ==2){
  if(secondsArray[0] > secondsArray[1]){
      localStorage.setItem("top", secondsArray[0]);
      localStorage.setItem("runner", secondsArray[1]);
  }
  else{
    localStorage.setItem("top", secondsArray[1]);
    localStorage.setItem("runner", secondsArray[0]);
  }
}*/

switch (secondsArray.length) {
  case 1:localStorage.setItem("topMEDIUM", secondsArray[0]);

    break;

  case 2:  if(parseInt(secondsArray[0]) > parseInt(secondsArray[1])){
          localStorage.setItem("topMEDIUM", secondsArray[1]);
          localStorage.setItem("runnerMEDIUM", secondsArray[0]);
      }
      else{
        localStorage.setItem("topMEDIUM", secondsArray[0]);
        localStorage.setItem("runnerMEDIUM", secondsArray[1]);
      }
      break;

  case 3: dummyArray = secondsArray;
         var dummyArray2 =[];
         for (var i = 0; i < 3; i++) {
           max = 0;
              for( var j=0; j<3; j++){
                if(parseInt(dummyArray[j])> max){
                  max = parseInt(dummyArray[j]);
                }
              }
          for(var k=0; k<3; k++){
            if(parseInt(dummyArray[k]) == max){
              dummyArray.splice(k,1);
              break;
            }
          }
          dummyArray2.push(max);



              }
              localStorage.setItem("topMEDIUM",dummyArray2[2]);
              localStorage.setItem("runnerMEDIUM",dummyArray2[1]);
              localStorage.setItem("thirdMEDIUM",dummyArray2[0]);

             break;

case 4:    dummyArray = secondsArray;
           var dummyArray2 =[];
       for (var i = 0; i < 4; i++) {
         max = 0;
            for( var j=0; j<4; j++){
              if(parseInt(dummyArray[j])> max){
                max = parseInt(dummyArray[j]);
              }
            }
        for(var k=0; k<4; k++){
          if(parseInt(dummyArray[k]) == max){
            dummyArray.splice(k,1);
            break;
          }
        }
        dummyArray2.push(max);



            }
            localStorage.setItem("topMEDIUM",dummyArray2[3]);
            localStorage.setItem("runnerMEDIUM",dummyArray2[2]);
            localStorage.setItem("thirdMEDIUM",dummyArray2[1]);
            localStorage.setItem("fourthMEDIUM",dummyArray2[0]);

           break;

case 5:   dummyArray = secondsArray;
           var dummyArray2 =[];
       for (var i = 0; i < 5; i++) {
         max = 0;
            for( var j=0; j<5; j++){
              if(parseInt(dummyArray[j])> max){
                max = parseInt(dummyArray[j]);
              }
            }
        for(var k=0; k<5; k++){
          if(parseInt(dummyArray[k]) == max){
            dummyArray.splice(k,1);
            break;
          }
        }
        dummyArray2.push(max);



            }
            localStorage.setItem("topMEDIUM",dummyArray2[4]);
            localStorage.setItem("runnerMEDIUM",dummyArray2[3]);
            localStorage.setItem("thirdMEDIUM",dummyArray2[2]);
            localStorage.setItem("fourthMEDIUM",dummyArray2[1]);
            localStorage.setItem("fifthMEDIUM",dummyArray2[0]);
           break;






  default:   dummyArray = secondsArray;
            for (var m=0; m<dummyArray.length; m++){
              dummyArray[m] = parseInt(dummyArray[m]);
            }

            dummyArray.sort(function(a, b){return a - b});

            localStorage.setItem("topMEDIUM",dummyArray[0]);
            localStorage.setItem("runnerMEDIUM",dummyArray[1]);
            localStorage.setItem("thirdMEDIUM",dummyArray[2]);
            localStorage.setItem("fourthMEDIUM",dummyArray[3]);
            localStorage.setItem("fifthMEDIUM",dummyArray[4]);




             break;





}


}


























/*
var TOP = parseInt(localStorage.getItem("top"));
var RUNNER = parseInt(localStorage.getItem("runner"));
var THIRD = parseInt(localStorage.getItem("third"));
var FOURTH = parseInt(localStorage.getItem("fourth"));
var FIFTH = parseInt(localStorage.getItem("fifth"));

if (Nettime >= TOP){

   localStorage.setItem("top", Nettime);
}
else{
  if(Nettime >= RUNNER ){
    localStorage.setItem("runner", Nettime);
  }
  else{
    if(Nettime >= THIRD){
      localStorage.setItem("third", Nettime);
    }
    else{
      if(Nettime >=FOURTH){
        localStorage.setItem("fourth",Nettime);
      }
      else{
        localStorage.setItem("fifth",Nettime);
      }
    }
  }
}*/
